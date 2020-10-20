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
import { reactive, watch } from 'vue';

export default {
  setup() {
    const titleState = reactive({
      title: 'Who gets a free beer?',
      isEditing: false,
    });

    function isEditing() {
      titleState.isEditing = true;
    }

    watch(titleState, (newState, oldState) => {
      console.log(titleState, newState, oldState);
    });

    return {
      titleState,
      isEditing,
    };
  },
};
</script>
