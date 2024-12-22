<template>
  <div class="flex-none">
    <template v-if="nextPage.value === '/SignUp/age-info'">
      <div class="flex flex-row justify-between">
        <NuxtLink
          :to="nextPage.value"
          class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 ml-2 text-lg font-medium text-white shadow-sm hover:bg-cyan-700"
        >
          <p>Next Step</p>
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row justify-between">
        <NuxtLink
          :to="previousPage.value"
          class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-3 px-4 mr-2 text-lg font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <p>Previous Step</p>
        </NuxtLink>
        <NuxtLink
          :to="nextPage.value"
          class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 ml-2 text-lg font-medium text-white shadow-sm hover:bg-cyan-700"
        >
          <p>Next Step</p>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  nextPageStateName: {
    type: String,
    required: true,
  },
  previousPageStateName: {
    type: String,
    required: true,
  },
});

// Using refs to hold the state values dynamically
const nextPageState = useNextPage(props.nextPageStateName);
const previousPageState = useState(
  props.previousPageStateName,
  () => "/SignUp/start"
);

// Using computed properties to access the dynamic states
const nextPage = computed(() => nextPageState.value);
const previousPage = computed(() => previousPageState.value);
</script>
