<template>
  <div id="app">
    <Diff></Diff>
    <!-- <p>{{dateToday}}</p> -->
    <div class="bill-row">
      {{ coldWaterLabel }} = <strong>{{ coldWaterTotal }} грн.</strong>
    </div>
    <div class="bill-row">
      {{ hotWaterLabel }} = <strong>{{ hotWaterTotal }} грн.</strong>
    </div>
    <div class="bill-row">
      Електроенергія {{ electricityHint }} =
      <strong>{{ electricityTotal }} грн.</strong>
    </div>
    <div v-for="item in bills" class="bill-row">
      {{ item.title }}: <strong>{{ item.value }} грн.</strong>
    </div>
    <div class="bill-row grand-total-row">Всього: {{ grandTotal }} грн.</div>
  </div>

  <p>
    <button id="printButton" @click="print">Print</button>
  </p>
</template>

<script>
import Diff from './components/Diff.vue';
import html2canvas from 'html2canvas';
import { diffNumber } from "./store.js";

export default {
  name: 'App',
  components: {
    Diff,
  },
  computed: {
    dateToday() {
      return new Intl.DateTimeFormat('uk-UA').format(new Date());
    },
    coldWaterLabel() {
      const diffValues = this.diffs.filter(
          (item) => item.rateKey === 'coldWater'
      );
      const sumString = diffValues.map((item) => item.diff).join(' + ');

      if (false) {
        return `Холодна вода (${sumString}) ${this.counters.coldWater.units} * ${this.counters.coldWater.rate} ${this.counters.coldWater.rateUnits}`;
      }

      const hotWaterTotal = this.coldWaterTotalCounters.toFixed(1);

      return `Холодна вода ${hotWaterTotal} ${this.counters.coldWater.units} * ${this.counters.coldWater.rate} ${this.counters.coldWater.rateUnits}`;
    },
    hotWaterLabel() {
      const diffValues = this.diffs.filter(
          (item) => item.rateKey === 'hotWater'
      );
      const sumString = diffValues.map((item) => item.diff).join(' + ');

      if (false) {
        return `Гаряча вода (${sumString}) ${this.counters.hotWater.units} * ${this.counters.hotWater.rate} ${this.counters.hotWater.rateUnits}`;
      }

      const coldWaterTotal = this.hotWaterTotalCounters.toFixed(1);

      return `Гаряча вода ${coldWaterTotal} ${this.counters.hotWater.units} * ${this.counters.hotWater.rate} ${this.counters.hotWater.rateUnits}`;

    },
    coldWaterTotalCounters() {
      const coldWaterValues = this.diffs.filter(
          (item) => item.rateKey === 'coldWater'
      );
      const sum = coldWaterValues.reduce((total, item) => total + item.diff, 0);

      return sum;
    },
    hotWaterTotalCounters() {
      const hotWaterValues = this.diffs.filter(
          (item) => item.rateKey === 'hotWater'
      );
      const sum = hotWaterValues.reduce((total, item) => total + item.diff, 0);

      return sum;
    },
    coldWaterTotal() {
      const result = this.coldWaterTotalCounters * this.counters.coldWater.rate;

      return result.toFixed(2);
    },
    hotWaterTotal() {
      const result = this.hotWaterTotalCounters * this.counters.hotWater.rate;

      return result.toFixed(2);
    },
    electricityHint() {
      const dayDiff = this.diffs.find(
          (item) => item.rateKey === 'electricityDay'
      );
      const nightDiff = this.diffs.find(
          (item) => item.rateKey === 'electricityNight'
      );

      return `${nightDiff.diff} ${this.counters.electricityNight.units} * ${this.counters.electricityNight.rate} ${this.counters.electricityNight.rateUnits} + ${dayDiff.diff} ${this.counters.electricityDay.units} * ${this.counters.electricityDay.rate} ${this.counters.electricityDay.rateUnits}`;
    },
    electricityTotal() {
      const dayDiff = this.diffs.find(
          (item) => item.rateKey === 'electricityDay'
      );
      const nightDiff = this.diffs.find(
          (item) => item.rateKey === 'electricityNight'
      );
      const total =
          dayDiff.diff * this.counters.electricityDay.rate +
          nightDiff.diff * this.counters.electricityNight.rate;

      return total.toFixed(2);
    },
    totalList() {
      const list = [];

      this.counterKeys.forEach((key) => {
        const rate = this.counters[key].rate;
        const diffValues = this.diffs.filter((item) => item.rateKey === key);
        const sumString = diffValues.map((item) => item.diff).join(' + ');
        const diffTotal = diffValues.reduce(
            (total, item) => total + item.diff,
            0
        );
        const result = diffTotal * rate;

        list.push({
          debt: result,
          type: 'counter',
          key,
          hint: `${sumString} * ${rate} грн.`,
        });
      });

      this.bills.forEach((bill) => {
        list.push({
          debt: bill.value,
          type: 'bill',
          hint: `${bill.title}: ${bill.value} грн.`,
          bill,
        });
      });

      return list;
    },
    grandTotal() {
      console.log(this.totalList);

      let total = 0;

      const counterSum = this.counterKeys.reduce((sum, key) => {
        const rate = this.counters[key].rate;
        const values = this.diffs.filter((item) => item.rateKey === key);
        const diffTotal = values.reduce((total, item) => total + item.diff, 0);
        const result = diffTotal * rate;

        return sum + result;
      }, 0);

      total += counterSum;

      total += this.bills.reduce((sum, bill) => {
        return sum + bill.value;
      }, 0);

      return total.toFixed(2);
    },
  },
  data() {
    return {
      counterKeys: [
        'coldWater',
        'hotWater',
        'electricityNight',
        'electricityDay',
      ],
      counters: {
        coldWater: {
          rate: 30.384,
          units: 'м3',
          rateUnits: 'грн.',
        },
        hotWater: {
          rate: 112.11, // 97.89 + 14.22
          units: 'м3',
          rateUnits: 'грн.',
        },
        electricityNight: {
          rate: 1.32,
          units: 'кВт*год',
          rateUnits: 'грн.',
        },
        electricityDay: {
          rate: 2.64,
          units: 'кВт*год',
          rateUnits: 'грн.',
        },
      },
      // rates: {
      //   coldWater: 30.384,
      //   hotWater: 112.11, // 97.89 + 14.22
      //   electricityNight: 1.32,
      //   electricityDay: 2.64,
      // },
      diffs: [
        {
          key: 'Холодна вода (кухня)',
          diff: diffNumber('coldWater-kitchen'),
          rateKey: 'coldWater',
        },
        {
          key: 'Холодна вода (ванна)',
          diff: diffNumber('coldWater-bathroom'),
          rateKey: 'coldWater',
        },
        {
          key: 'Гаряча вода (кухня)',
          diff: diffNumber('hotWater-kitchen'),
          rateKey: 'hotWater',
        },
        {
          key: 'Гаряча вода (ванна)',
          diff: diffNumber('hotWater-bathroom'),
          rateKey: 'hotWater',
        },
        {
          key: 'Електроенергія (ніч)',
          diff: diffNumber('electricity-night'),
          rateKey: 'electricityNight',
        },
        {
          key: 'Електроенергія (день)',
          diff: diffNumber('electricity-day'),
          rateKey: 'electricityDay',
        },
      ],
      bills: [
        {
          title: 'АО ГВ',
          value: 15.35,
          group: '',
        },
        {
          title: 'АО ТЕ',
          value: 31.07,
          group: '',
        },
        {
          title: 'АО ХВВ',
          value: 39.19,
          group: '',
        },
        {
          title: 'Вивезення побутових відходів',
          value: 40.21,
          group: '',
        },
        {
          title: 'Управління багатоквартирним будинком',
          value: 303.63,
          group: '',
        },
        {
          title: 'Централізоване опалення',
          value: 1157.43,
          group: '',
        },
        {
          title: 'Відшкодування витрат з електроенергії',
          value: 39.15,
          group: '',
        },
      ],
    };
  },
  methods: {
    print() {

      const btn = document.getElementById('printButton');
      btn.style.display = 'none';

      html2canvas(document.getElementById('app')).then(function(canvas) {
        document.body.appendChild(canvas);
        btn.style.display = 'block';
      });

      /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
      // var container = document.getElementById("app");; /* full page */
      // html2canvas(container, { allowTaint: true }).then(function (canvas) {

      //     var link = document.createElement("a");
      //     document.body.appendChild(link);
      //     link.download = "html_image.jpg";
      //     link.href = canvas.toDataURL();
      //     link.target = '_blank';
      //     link.click();
      // });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  padding: 10px;
}

.bill-row {
  padding: 5px 0 5px;
}

.grand-total-row {
  font-weight: bold;
  font-size: 110%;
}
</style>
