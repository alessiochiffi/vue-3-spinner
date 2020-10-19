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

<style>
.slices-editor {
  background: #eaeaea;
  text-align: left;
  border-radius: 10px;
}
</style>
