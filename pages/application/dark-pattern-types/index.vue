<template>
  <main class="flex-1">
    <div class="mx-auto max-w-7xl px-4 mb-16 sm:px-6 md:px-8">
      <!-- Content -->
      <div v-for="(group, index) in darkPatternGroups" :key="index">
        <DarkPatternList :header="group.header" :banners="group.banners" />
      </div>
      <!-- /End Content -->
    </div>
  </main>
</template>

<script setup>
import { darkPatternGroups } from "~/composables/useDarkPatternList";
</script>
