<template>
  <h1>Who runs stand up?</h1>
  <div class="ui input">
    <input v-model="newSlice" class="ui input" placeholder="Add a slice" />
  </div>

  <button class="ui primary button" @click="addSlice">Add</button>
  <br />
  <div class="ui text container">
    <Slice
      v-for="(slice, index) in slices"
      :key="index"
      :data="slice"
      v-on:delete-slice="deleteSlice(slice.id)"
    >
    </Slice>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { loadSlices, updateSlices } from '../composable/useWheel';
import Slice from '../components/Slice.vue';

function saveSlice(slice) {
  localStorage.setItem('slices', JSON.stringify(slice));
}

export default {
  components: {
    Slice,
  },
  setup() {
    const newSlice = ref('');
    const slices = reactive(loadSlices());

    function addSlice() {
      slices.push({
        id: Date.now(),
        done: false,
        text: newSlice.value,
        textFillStyle: '#000',
        fillStyle: '#fadede',
      });
      newSlice.value = '';
    }

    function deleteSlice(id) {
      console.log('Delete slice with id: ' + id);
      for (let i = 0; i < slices.length; i++) {
        if (slices[i].id == id) {
          slices.splice(i, 1);
          break;
        }
      }
    }

    watch(slices, (newSlice, prevSlice) => {
      console.log(prevSlice);
      saveSlice(newSlice);
      updateSlices(newSlice);
    });

    return {
      slices,
      newSlice,
      addSlice,
      deleteSlice,
    };
  },
};
</script>
