<script setup>
import { prevSnapshot, currentSnapshot, prevValueFixed, curValueFixed, diff, diffSum } from '../store.js';
</script>

<style scoped>
.table {
  border-collapse: collapse;
  border: 1px solid #000000;
}

.table td, .table th {
  border: 1px solid #000000;
  padding: 5px;
}
.step-total td {
  font-weight: bold;
}
</style>


<template>
  <table class="table">
    <tr>
      <th>Дата</th>
      <th>Холодна К</th>
      <th>Холодна В</th>
      <th>Гаряча К</th>
      <th>Гаряча В</th>
      <th>ЕЛ ніч</th>
      <th>ЕЛ день</th>
    </tr>
    <tr>
      <th>{{ prevSnapshot.dateStr }}</th>
      <td>{{ prevValueFixed('coldWater-kitchen') }}</td>
      <td>{{ prevValueFixed('coldWater-bathroom') }}</td>
      <td>{{ prevValueFixed('hotWater-kitchen') }}</td>
      <td>{{ prevValueFixed('hotWater-bathroom') }}</td>
      <td>{{ prevValueFixed('electricity-night') }}</td>
      <td>{{ prevValueFixed('electricity-day') }}</td>
    </tr>
    <tr>
      <th>{{ currentSnapshot.dateStr }}</th>
      <td>{{ curValueFixed('coldWater-kitchen') }}</td>
      <td>{{ curValueFixed('coldWater-bathroom') }}</td>
      <td>{{ curValueFixed('hotWater-kitchen') }}</td>
      <td>{{ curValueFixed('hotWater-bathroom') }}</td>
      <td>{{ curValueFixed('electricity-night') }}</td>
      <td>{{ curValueFixed('electricity-day') }}</td>
    </tr>
    <tr>
      <th rowspan="3">Різниця</th>
      <td>{{ diff('coldWater-kitchen') }}</td>
      <td>{{ diff('coldWater-bathroom') }}</td>
      <td>{{ diff('hotWater-kitchen') }}</td>
      <td>{{ diff('hotWater-bathroom') }}</td>
      <td>{{ diff('electricity-night') }}</td>
      <td>{{ diff('electricity-day') }}</td>
    </tr>
    <tr class="step-total">
      <td colspan="2">Холодна</td>
      <td colspan="2">Гаряча</td>
      <td>ЕЛ ніч</td>
      <td>ЕЛ день</td>
    </tr>
    <tr class="step-total">
      <td colspan="2">{{ diffSum(['coldWater-kitchen', 'coldWater-bathroom']) }}</td>
      <td colspan="2">{{ diffSum(['hotWater-kitchen', 'hotWater-bathroom']) }}</td>
      <td>{{ diff('electricity-night') }}</td>
      <td>{{ diff('electricity-day') }}</td>
    </tr>
  </table>
</template>
