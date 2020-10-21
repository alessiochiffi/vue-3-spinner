import { reactive } from 'vue';

let state = reactive({
  question: 'Who runs stand up today?',
  segments: [],
  winner: '',
});

/**
 * Slices / segments for the wheel - sent from the list component
 * @param {array} slices
 */
export function updateSlices(slices) {
  state.segments = slices;
}

/**
 * Load slices on page load
 */
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

/**
 * Get winner from state
 */
export function getWinner() {
  return state.winner;
}

/**
 * Set the winner in the state
 * @param {string} winner
 */
export function setWinner(winner) {
  return (state.winner = winner);
}

/**
 * Get the question from local storage or default from state
 */
export function getQuestion() {
  const localQuestion = localStorage.getItem('question');

  if (localQuestion) {
    return localQuestion;
  } else {
    return state.question;
  }
}

/**
 * Set the question in the state
 * @param {string} question
 */
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
