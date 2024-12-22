<template>
  <span
    class="h-6 w-6 inline-flex items-center justify-center text-xs font-bold text-white bg-cyan-700 rounded-full"
  >
    {{ props.number }}
  </span>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  number: {
    type: [String, Number],
    default: "0",
  },
});
</script>
