<template>
  <button>
    <slot v-if="$slots.default"></slot>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  console.log('button mounted');
});
</script>
