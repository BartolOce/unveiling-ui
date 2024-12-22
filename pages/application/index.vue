<template>
  <div class="min-h-full">
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->

    <div class="pt-10">
      <div
        class="mx-auto max-w-3xl px-6 lg:grid lg:max-w-7xl lg:grid-cols-8 lg:gap-8 lg:px-8"
      >
        <div class="flex flex-col lg:col-span-8 xl:col-span-5">
          <!--Header-->
          <section aria-labelledby="profile-overview-title">
            <div class="overflow-hidden rounded-lg bg-white border">
              <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div class="sm:flex sm:space-x-5">
                    <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p class="text-sm font-medium text-gray-600">
                        Welcome to the
                      </p>
                      <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                        {{ user.name }}
                      </p>
                      <p class="text-sm font-medium text-gray-600">
                        {{ user.role }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
              >
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="px-6 py-5 text-center text-sm font-medium"
                >
                  <span class="text-gray-900">{{ stat.value }}</span>
                  {{ " " }}
                  <span class="text-gray-600">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </section>

          <!--Section-->
          <section aria-labelledby="quick-links-title" class="py-8">
            <div
              class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 border sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
            >
              <h2 class="sr-only" id="quick-links-title">Quick links</h2>
              <div
                v-for="(action, actionIdx) in actions"
                :key="action.name"
                :class="[
                  actionIdx === 0
                    ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                    : '',
                  actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                  actionIdx === actions.length - 1
                    ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                    : '',
                  'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500',
                ]"
              >
                <div>
                  <span
                    :class="[
                      action.iconBackground,
                      action.iconForeground,
                      'rounded-lg inline-flex p-3 ring-4 ring-white',
                    ]"
                  >
                    <component
                      :is="action.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div class="mt-8">
                  <h3 class="text-lg font-medium">
                    <NuxtLink :href="action.href" class="focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ action.name }}
                    </NuxtLink>
                  </h3>
                  <p class="mt-2 text-sm text-gray-500">
                    {{ action.text }}
                  </p>
                </div>
                <span
                  class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </section>
        </div>

        <aside class="hidden xl:col-span-3 xl:block">
          <div class="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div class="rounded-lg bg-white border">
                <div class="p-6">
                  <h2
                    id="announcements-title"
                    class="text-base font-medium text-gray-900"
                  >
                    Achievements tutorial
                  </h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-5 divide-y divide-gray-200">
                      <li
                        v-for="announcement in announcements"
                        :key="announcement.id"
                        class="py-5"
                      >
                        <div
                          class="relative focus-within:ring-2 focus-within:ring-cyan-500"
                        >
                          <h3 class="text-sm font-semibold text-gray-800">
                            <a
                              :href="announcement.href"
                              class="hover:underline focus:outline-none"
                            >
                              <!-- Extend touch target to entire panel -->
                              <span
                                class="absolute inset-0"
                                aria-hidden="true"
                              />
                              {{ announcement.title }}
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            {{ announcement.preview }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >View all</a
                    >
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum",
    href: "#",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    href: "#",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    href: "#",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
  },
];

const user = {
  name: "Dark Pattern Playground",
  role: "Let's walk you through the navigation",
};

const actions = [
  {
    icon: AcademicCapIcon,
    name: "1. Learn about them",
    text: "Explore the world of dark patternsand learn about their common uses, where they typically appear, their underlying goals, and much more.",
    href: "/application/about-dark-patterns",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    icon: CursorArrowRaysIcon,
    name: "2. Interact with them",
    text: "Engage with various types of dark patterns through interactive examples. Choose different patterns, see real-world instances, experience them firsthand, and much more.",
    href: "/application/dark-pattern-types",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    icon: StarIcon,
    name: "3. Achievements",
    text: " See all the milestones you've unlocked as you navigate through dark patterns, showcasing your growing expertise and resistance to manipulation.",
    href: "/application/achievements",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    icon: ChartBarIcon,
    name: "4. Look at the stats",
    text: "There is no need for hiding our research. Look at the stats and see for yourself how are dark patterns affecting others.",
    href: "/application/dashboard",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
</script>
