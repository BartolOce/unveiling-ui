<template>
  <div v-if="darkPattern">
    <PatternComponent :dark-pattern="darkPattern" />
  </div>
  <div v-else>
    <p>Pattern not found</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useDarkPattern } from "~/composables/useDarkPattern";
import PatternComponent from "~/components/PatternComponent.vue";

const route = useRoute();
const { name } = route.params;

const { getPatternByName } = useDarkPattern();
const darkPattern = getPatternByName(decodeURIComponent(name));
</script>
