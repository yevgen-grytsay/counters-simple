<script setup>
import { curValueFixed } from '../store.js';
</script>

<template>
  <p>
    <span>❄</span> Холодна <span class="value">К {{ curValueFixed('coldWater-kitchen') }}</span>, <span class="value">В {{ curValueFixed('coldWater-bathroom') }}</span>;
    <br><span>🔥</span> Гаряча <span class="value">К {{ curValueFixed('hotWater-kitchen') }}</span>, <span class="value">В {{ curValueFixed('hotWater-bathroom') }}</span>;
    <br><span>🗲</span> Ел <span class="value">День {{ curValueFixed('electricity-day') }}</span>, <span class="value">Ніч {{ curValueFixed('electricity-night') }}</span>;
  </p>
</template>

<style scoped>
.value {
  font-family: monospace;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 0 3px;
}
</style>