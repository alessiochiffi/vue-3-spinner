import { reactive } from 'vue';

let state = reactive({
  question: 'Who runs stand up today?',
  segments: [],
  winner: '',
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

export function getWinner() {
  return state.winner;
}

export function setWinner(winner) {
  return (state.winner = winner);
}

export function getQuestion() {
  const localQuestion = localStorage.getItem('question');

  if (localQuestion) {
    return localQuestion;
  } else {
    return state.question;
  }
}

export function setQuestion(question) {
  localStorage.setItem('question', question);
  return (state.question = question);
}

export const useWheel = {
  state,
  updateSlices,
  loadSlices,
  getWinner,
  setWinner,
  getQuestion,
  setQuestion,
};
