<template>
  <NuxtPage />
</template>

<script setup>
import { provideUseId } from "@headlessui/vue";

//Fixes the hidration error where the client ID of a headlessUI doesnt match the servers ID, more info on https://github.com/tailwindlabs/headlessui/issues/2913
provideUseId(() => useId());
</script>
