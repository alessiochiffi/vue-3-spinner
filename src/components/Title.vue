<template>
  <h2 v-if="!titleState.isEditing" @click="isEditing()">
    {{ titleState.title }}
  </h2>
  <div class="edit-title" v-if="titleState.isEditing">
    <input
      type="text"
      class="ui input"
      v-model="newTitle"
      placeholder="Type your question"
    />
    <button
      @click="[(titleState.title = newTitle), (titleState.isEditing = false)]"
      class="ui button"
    >
      ok
    </button>
  </div>
</template>

<script>
import { reactive, watch, onMounted } from 'vue';
import { setQuestion, getQuestion } from '../composable/useWheel';

export default {
  setup() {
    const titleState = reactive({
      title: getQuestion(),
      isEditing: false,
    });

    function isEditing() {
      titleState.isEditing = true;
    }

    watch(titleState, (newState, oldState) => {
      console.log(titleState, newState, oldState);
      setQuestion(titleState.title);
    });

    onMounted(() => {
      setQuestion(titleState.title);
    });

    return {
      titleState,
      isEditing,
    };
  },
};
</script>
