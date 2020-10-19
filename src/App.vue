<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <Slices></Slices>
    <Wheel
      :segments="[
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 1',
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 2',
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 3',
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 4',
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 5',
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 6',
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 7',
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 8',
        },
      ]"
    ></Wheel>
  </div>
</template>

<script>
import Slices from './components/Slices.vue';
import Wheel from './components/Wheel.vue';

export default {
  name: 'app',
  components: {
    Wheel,
    Slices,
  },
};
</script>
