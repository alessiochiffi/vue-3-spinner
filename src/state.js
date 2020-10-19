import { reactive } from 'vue';

const appState = reactive({
  segments: [
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
  ],
});

// Export an object with the state and mutations
export default {
  appState,
};
