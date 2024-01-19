<script setup>
import { curValueFixed } from '../store.js';
</script>

<template>
  <p>
    Холодна К {{ curValueFixed('coldWater-kitchen') }}, В {{ curValueFixed('coldWater-bathroom') }};
    <br>Гаряча К {{ curValueFixed('hotWater-kitchen') }}, В {{ curValueFixed('hotWater-bathroom') }};
    <br>Ел День {{ curValueFixed('electricity-day') }}, Ніч {{ curValueFixed('electricity-night') }};
  </p>
</template>