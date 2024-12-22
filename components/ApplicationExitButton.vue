<template>
  <div
    class="group flex items-center text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
  >
    <button
      type="button"
      class="flex items-center w-full px-2 py-2"
      @click="props.onClick"
    >
      <ArrowLeftEndOnRectangleIcon
        class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
        aria-hidden="true"
      />
      Exit
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  onClick: {
    type: Function,
    default: null,
  },
});
</script>
