<template>
  <NuxtLayout name="app-layout">
    <IndexHero />
    <div class="bg-gray-100 lg:pt-8 shadow">
      <div class="relative overflow-hidden">
        <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div class="relative h-full">
            <svg
              class="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 flex flex-col" aria-hidden="true">
            <div class="flex-1 pb-60" />
            <div class="w-full flex-1 bg-gray-800" />
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:pt-10">
            <img
              class="relative rounded-lg shadow-lg"
              src="/hero2.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
    <IndexFeatures />
    <IndexCta />
    <IndexContent />
    <IndexFaq />
  </NuxtLayout>
</template>
