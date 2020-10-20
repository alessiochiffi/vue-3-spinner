<template>
  And the winner is
  <div>{{ winnerState.name }}</div>
</template>

<script>
import { reactive, watch } from 'vue';
import { useWheel, getWinner } from '../composable/useWheel';

export default {
  setup() {
    const winnerState = reactive({ name: '' });

    watch(useWheel.state, () => {
      winnerState.name = getWinner();
    });

    return { winnerState };
  },
};
</script>
