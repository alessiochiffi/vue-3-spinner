<template>
  <div id="app">
    <div class="ui two column stackable grid container">
      <div class="column slices-editor">
        <Slices></Slices>
      </div>
      <div class="column">
        <Wheel></Wheel>
      </div>
    </div>
    <!-- <Winner></Winner> -->
  </div>
</template>

<script>
import Slices from './components/Slices.vue';
import Wheel from './components/Wheel.vue';
// import Winner from './components/Winner.vue';

export default {
  name: 'app',
  components: {
    Wheel,
    Slices,
    // Winner,
  },
};
</script>

<style>
.slices-editor {
  background: #eaeaea;
  text-align: left;
  border-radius: 10px;
}
</style>
