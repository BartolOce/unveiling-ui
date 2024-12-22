<template>
  <div class="min-h-full">
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->

    <div class="py-10">
      <div
        class="mx-auto max-w-3xl px-6 lg:grid lg:max-w-7xl lg:grid-cols-8 lg:gap-8 lg:px-8"
      >
        <div class="flex flex-col lg:col-span-8 xl:col-span-5">
          <TabGroup as="div" class="pb-6">
            <TabList
              class="isolate flex divide-x divide-gray-200 rounded-lg border"
            >
              <Tab
                v-for="(tab, tabIdx) in tabs"
                :key="tab.name"
                v-slot="{ selected }"
                :href="tab.href"
                :class="[
                  tab.current
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700',
                  tabIdx === 0 ? 'rounded-l-lg' : '',
                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
                ]"
                @mousedown.prevent
                @click="removeFocus"
              >
                <span>{{ tab.name }}</span>
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-cyan-600' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </Tab>
            </TabList>

            <TabPanels class="aspect-w-1 py-4 aspect-h-1 w-full">
              <TabPanel
                v-for="question in questions"
                :key="question.id"
                class="bg-white px-4 py-6 border sm:rounded-lg sm:p-6"
              >
                <article :aria-labelledby="'question-title-' + question.id">
                  <div>
                    <h2
                      :id="'question-title-' + question.id"
                      class="text-base font-medium text-gray-900"
                    >
                      {{ question.title }}
                    </h2>
                  </div>
                  <div
                    class="mt-2 space-y-4 text-sm text-gray-700"
                    v-html="question.body"
                  />
                </article>
              </TabPanel>
            </TabPanels>
          </TabGroup>
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
                    Achievements
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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

const tabs = [
  { name: "Lorem ipsum", href: "#", current: true },
  { name: "Lorem ipsum", href: "#", current: false },
  { name: "Lorem ipsum", href: "#", current: false },
];

const questions = [
  {
    id: "1",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Lorem ipsum",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "Lorem ipsum",
    body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `,
  },
  {
    id: "2",
    likes: "59",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>vulputate dignissim. Eget felis eget nunc lobortis mattis aliquam faucibus. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Senectus et netus et malesuada fames ac turpis. Elementum facilisis leo vel fringilla. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Leo a diam</p>
      `,
  },
  // More...
];

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

const removeFocus = (event) => {
  event.currentTarget.blur();
};
</script>
