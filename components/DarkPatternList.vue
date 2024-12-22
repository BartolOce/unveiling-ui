<template>
  <div class="mx-auto max-w-2xl lg:max-w-none">
    <!--Group type and description-->
    <div class="mt-16 border-gray-200">
      <h3 class="text-2xl font-medium text-gray-900">
        {{ header.name }}
      </h3>
      <p class="mt-2 text-lg text-gray-500">
        {{ header.description }}
      </p>
    </div>
    <!--Group type and description end-->

    <div
      class="px-6 mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"
    >
      <div v-for="banner in banners" :key="banner.id" class="group relative">
        <div
          class="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-200 border"
        >
          <img
            :src="banner.imageSrc"
            :alt="banner.imageAlt"
            class="object-cover object-center"
          />
          <div
            class="flex items-end p-4 opacity-100 group-hover:opacity-100 lg:opacity-0"
            aria-hidden="true"
          >
            <div
              class="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter"
            >
              View Pattern
            </div>
          </div>
        </div>
        <div
          class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
        >
          <h3>
            <a :href="banner.href">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ banner.name }}
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  header: {
    type: Object,
    required: true,
  },
  banners: {
    type: Array,
    required: true,
  },
});
</script>
