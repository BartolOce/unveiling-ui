<template>
  <main
    class="mx-auto px-4 pt-14 pb-24 sm:px-6 sm:pt-16 sm:pb-32 lg:max-w-7xl lg:px-8"
  >
    <div
      class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
    >
      <div class="lg:col-span-4 lg:row-end-1">
        <TabGroup as="div" class="flex flex-col-reverse">
          <div
            class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
          >
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in darkPattern.images"
                :key="image.id"
                v-slot="{ selected }"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50"
              >
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="image.src"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-cyan-500' : 'ring-transparent border',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-w-1 aspect-h-1 w-full">
            <TabPanel v-for="image in darkPattern.images" :key="image.id">
              <img
                :src="image.src"
                :alt="image.alt"
                class="h-full w-full object-cover object-center border sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <!-- Dark pattern details -->
      <div
        class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
      >
        <div class="flex flex-col-reverse">
          <div class="mt-4">
            <!--Main header-->
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              {{ darkPattern.header }}
            </h1>
            <!--Number of people that have seen something similar-->
            <p class="mt-2 text-sm text-gray-500">
              Over {{ darkPattern.views }} people already encountered something
              similar
            </p>
          </div>
          <!--Dark pattern rarity, banner above main header-->
          <div>
            <div class="flex items-center">
              <RarityBanner :rarity="darkPattern.rarity" />
            </div>
          </div>
        </div>

        <p class="mt-6 text-gray-500">{{ darkPattern.description }}</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <button
            type="button"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            I've seen this before
          </button>
          <button
            type="button"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 py-3 px-8 text-base font-medium text-cyan-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Preview
          </button>
        </div>

        <div class="mt-10 border-t border-gray-200 pt-10">
          <h3 class="text-sm font-medium text-gray-900">Explanation</h3>
          <p class="mt-4 text-sm text-gray-500">
            {{ darkPattern.explanation }}
          </p>
        </div>

        <div class="mt-10 border-t border-gray-200 pt-10">
          <h3 class="text-sm font-medium text-gray-900">How to spot them?</h3>
          <div class="prose prose-sm mt-4 text-gray-500">
            <ul role="list" class="list-disc list-inside">
              <li
                v-for="highlight in darkPattern.highlights"
                :key="highlight"
                class="py-1"
              >
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 border-t border-gray-200 pt-10">
          <h3 class="text-sm font-medium text-gray-900">
            How does it affect me?
          </h3>
          <p class="mt-4 text-sm text-gray-500">{{ darkPattern.impact }}</p>
        </div>
      </div>

      <div
        class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none"
      >
        <TabGroup as="div">
          <div class="border-b border-gray-200">
            <TabList class="-mb-px flex space-x-8">
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'border-cyan-600 text-cyan-600'
                      : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                  ]"
                >
                  Definition
                </button>
              </Tab>
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'border-cyan-600 text-cyan-600'
                      : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                  ]"
                >
                  More Examples
                </button>
              </Tab>
            </TabList>
          </div>
          <TabPanels as="template">
            <TabPanel class="-mb-10">
              <p class="mt-10 text-sm text-gray-500">
                {{ darkPattern.definition }}
              </p>
            </TabPanel>

            <TabPanel class="text-sm text-gray-500">
              <dl>
                <template
                  v-for="example in darkPattern.examples"
                  :key="example.question"
                >
                  <dt class="mt-10 font-medium text-gray-900">
                    {{ example.question }}
                  </dt>
                  <dd class="prose prose-sm mt-2 max-w-none text-gray-500">
                    <p>{{ example.answer }}</p>
                  </dd>
                </template>
              </dl>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>

    <!-- Interactive part for later -->
    <div class="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
      <p>Tu jos fali dio</p>
    </div>
  </main>
</template>

<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import RarityBanner from "~/components/RarityBanner.vue";

defineProps({
  darkPattern: {
    type: Object,
    required: true,
    default: () => ({
      name: "",
      header: "",
      images: [],
      rarity: "",
      views: "",
      description: "",
      highlights: [],
      impact: "",
      explanation: "",
      definition: "",
      examples: [],
    }),
  },
});
</script>
