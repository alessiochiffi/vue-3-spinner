import { reactive } from 'vue';

let state = reactive({
  segments: [],
});

export function updateSlices(slices) {
  state.segments = slices;
}

export function loadSlices() {
  const localSlices = localStorage.getItem('slices');
  if (localSlices === null) {
    return [];
  } else {
    console.log('slice loaded: ' + localSlices);
    state.segments = JSON.parse(localSlices);
    return JSON.parse(localSlices);
  }
}

export const useWheel = {
  state,
  updateSlices,
  loadSlices,
};
