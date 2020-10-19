<template>
  <div class="ui segment">
    {{ data.text }}
    <button class="ui button secondary" @click="$emit('delete-slice')">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
