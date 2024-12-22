<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div
      class="bg-cyan-600 h-2.5 rounded-full transition-all duration-500"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>
