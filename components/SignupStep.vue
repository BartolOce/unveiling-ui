<template>
  <div>
    <div class="flex justify-center">
      <img class="rounded-full h-48" :src="imageSrc" />
    </div>

    <h2
      class="text-center mt-3 text-2xl font-bold tracking-tight text-gray-900"
    >
      {{ title }}
    </h2>
    <p class="text-center mt-3 text-lg text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  progressValue: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: String,
    required: true,
  },
  previousPage: {
    type: String,
    required: true,
  },
});

const progress = useProgress();
progress.value = props.progressValue;

const { setNextPage, setPreviousPage } = useNavigationState();

onMounted(() => {
  setNextPage(`${props.nextPage}`);
  setPreviousPage(`${props.previousPage}`);
});
</script>
