<template>
  <div ref="wrapper" class="min-h-screen flex flex-col bg-gray-50">
    <NuxtLayout name="app-layout">
      <div class="flex flex-1 overflow-hidden">
        <div class="relative hidden w-0 flex-1 lg:block my-10 ml-10">
          <img
            class="absolute inset-0 h-full w-full object-cover rounded-3xl shadow"
            src="/SignUp.webp"
          />
        </div>
        <div
          ref="content"
          class="flex-1 flex flex-col py-10 lg:flex-none lg:px-10"
        >
          <div class="mx-auto w-full w-custom lg:h-full">
            <div
              class="flex flex-col justify-between bg-white h-full w-full pb-8 px-4 shadow sm:rounded-3xl sm:px-8"
            >
              <!-- Upper Part -->

              <div class="flex flex-col items-center justify-center flex-grow">
                <NuxtPage />
                <div class="w-40 mt-8">
                  <ProgressBar :progress="progress" />
                </div>
              </div>
              <!-- Lower Part -->
              <div class="flex-none">
                <template v-if="nextPage === '/SignUp/age-info'">
                  <div class="flex flex-row justify-between">
                    <NuxtLink
                      :to="nextPage"
                      class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 ml-2 text-lg font-medium text-white shadow-sm hover:bg-cyan-700"
                    >
                      <p>Next Step</p>
                    </NuxtLink>
                  </div>
                </template>
                <template v-else>
                  <div class="flex flex-row justify-between">
                    <NuxtLink
                      :to="previousPage"
                      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-3 px-4 mr-2 text-lg font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <p>Previous Step</p>
                    </NuxtLink>
                    <NuxtLink
                      :to="nextPage"
                      class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 ml-2 text-lg font-medium text-white shadow-sm hover:bg-cyan-700"
                    >
                      <p>Next Step</p>
                    </NuxtLink>
                  </div>
                </template>
              </div>
              <component :is="currentComponent" :name="name" />
            </div>
          </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block my-10 mr-10">
          <img
            class="absolute inset-0 h-full w-full object-cover rounded-3xl shadow"
            src="/SignUp.webp"
          />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const wrapper = ref(null);
const content = ref(null);
const progress = useProgress();
const { nextPage, previousPage } = useNavigationState();
const currentComponent = ref(null);
const name = ref("age"); // Initialize with the first subpage
const setDynamicHeight = () => {
  if (wrapper.value && content.value) {
    const navbarHeight = wrapper.value.querySelector("nav").offsetHeight;
    content.value.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
  }
};

onMounted(() => {
  setDynamicHeight();
  window.addEventListener("resize", setDynamicHeight);
  currentComponent.value = "InfoPageComponent";
});

// Watch nextPage to update currentComponent dynamically
watch(nextPage, (newVal) => {
  if (newVal.includes("-info")) {
    currentComponent.value = "InfoPageComponent";
  } else {
    currentComponent.value = "MainPageComponent";
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", setDynamicHeight);
});
</script>

<style>
.w-custom {
  width: 30rem;
}
</style>
