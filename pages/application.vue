<template>
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4 py-1">
                <img class="h-8 w-auto" src="/logo.png" alt="Easywire logo" />
                <p class="text-xl font-bold text-white pl-2">ClearUI</p>
              </div>
              <nav
                class="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div class="space-y-1 px-2">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-cyan-800 text-white'
                        : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    @click="sidebarOpen = false"
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </NuxtLink>
                </div>
                <div class="mt-6 pt-6">
                  <div class="space-y-1 px-2">
                    <NuxtLink
                      v-for="item in secondaryNavigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-cyan-800 text-white'
                          : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
                      ]"
                      :aria-current="item.current ? 'page' : undefined"
                      @click="sidebarOpen = false"
                    >
                      <component
                        :is="item.icon"
                        class="mr-4 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </NuxtLink>
                    <ApplicationExitButton
                      :on-click="openPopupAndCloseSidebar"
                    />
                  </div>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <!-- Sidebar component -->
      <div class="flex flex-grow flex-col overflow-y-auto bg-cyan-700">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4 py-1">
            <img class="h-8 w-auto" src="/logo.png" alt="Easywire logo" />
            <p class="text-xl font-bold text-white pl-2">ClearUI</p>
          </div>
          <nav
            class="mt-5 flex-1 space-y-1 bg-cyan-700 px-2"
            aria-label="Sidebar"
          >
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-cyan-800 text-white'
                  : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                aria-hidden="true"
              />
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>
        <div class="flex flex-shrink-0 border-t border-cyan-800">
          <div class="flex-1 space-y-1 bg-cyan-700 px-2 py-4">
            <NuxtLink
              v-for="item in secondaryNavigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-cyan-800 text-white'
                  : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                aria-hidden="true"
              />
              {{ item.name }}
            </NuxtLink>
            <ApplicationExitPopup />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col lg:pl-64">
      <div
        class="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none"
      >
        <button
          type="button"
          class="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Notification bell -->
        <div
          class="flex flex-1 justify-between px-4 lg:border-b-[2px] lg:border-gray-200"
        >
          <div class="flex-1" />
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useNavigation } from "~/composables/useNavigation";

import { openPopup } from "~/composables/usePopup";

import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  Bars3CenterLeftIcon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const { navigation, secondaryNavigation } = useNavigation();
const sidebarOpen = ref(false);

async function openPopupAndCloseSidebar() {
  // Close sidebar first
  sidebarOpen.value = false;

  // Wait for the sidebar to close completely
  await nextTick();

  // Now open the modal
  openPopup();
}
</script>
