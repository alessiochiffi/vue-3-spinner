<template>
  <Title></Title>
  <form @submit.prevent="addSlice">
    <div class="ui input">
      <input v-model="newSlice" class="ui input" placeholder="Type here" />
    </div>
    <button class="ui primary button">Add</button>
  </form>
  <div class="ui">
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
import Title from '../components/Title.vue';

function saveSlice(slice) {
  localStorage.setItem('slices', JSON.stringify(slice));
}

export default {
  components: {
    Slice,
    Title,
  },
  setup() {
    const newSlice = ref('');
    const slices = reactive(loadSlices());

    const randomColours = [
      '#1B9CFC',
      '#EAB543',
      '#9AECDB',
      '#F97F51',
      '#F97F51',
      '#FEA47F',
      '#FC427B',
    ];

    function addSlice() {
      slices.push({
        id: Date.now(),
        done: false,
        text: newSlice.value,
        textFillStyle: '#000',
        fillStyle:
          randomColours[Math.floor(Math.random() * randomColours.length)],
        strokeStyle: '#fff',
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

<style>
.input {
  margin-bottom: 20px;
}

.segment {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#prizePointer {
  max-width: 42px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  top: -6px;
}
</style>
