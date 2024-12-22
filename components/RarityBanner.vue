<!--1 is for Common-->
<!--2 is for Uncommon-->
<!--3 is for Rare-->
<!--4 is for Ultra Rare-->
<!--5 is for Legendary-->
<template>
  <div>
    <span
      v-if="props.rarity === 1"
      class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-gray-500"
      >Common</span
    >
    <span
      v-else-if="props.rarity === 2"
      class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400"
      >Uncommon</span
    >
    <span
      v-else-if="props.rarity === 3"
      class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400"
      >Rare</span
    >
    <span
      v-else-if="props.rarity === 4"
      class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-purple-400"
      >Ultra Rare</span
    >
    <span
      v-else-if="props.rarity === 5"
      class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-300"
      >Legendary</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rarity: {
    type: Number,
    required: false,
    default: 1,
  },
});
</script>
