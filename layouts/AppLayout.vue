<template>
  <nav class="navbar">
    <Popover class="relative bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <NuxtLink to="/" v-ripple class="flex justify-center items-center">
              <img class="h-12 w-auto" src="/logo.png" alt="Your Company" />
              <span class="ml-4 text-3xl font-medium text-gray-700"
                >ClearUI</span
              >
            </NuxtLink>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>

          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <NuxtLink
              v-ripple
              to="/SignIn"
              class="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              <p>Sign in</p>
            </NuxtLink>

            <NuxtLink
              v-ripple
              to="/SignUp"
              class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-2 text-lg font-medium text-white shadow-sm hover:bg-cyan-700"
            >
              <p>Sign up</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div
            class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span class="ml-3 text-base font-medium text-gray-900">{{
                      item.name
                    }}</span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="space-y-6 py-6 px-5">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >Pricing</a
                >

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >Docs</a
                >
                <a
                  v-for="item in resources"
                  :key="item.name"
                  :href="item.href"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >{{ item.name }}</a
                >
              </div>
              <div>
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >Sign up</a
                >
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {{ " " }}
                  <a href="#" class="text-indigo-600 hover:text-indigo-500"
                    >Sign in</a
                  >
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </nav>
  <slot />
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];
</script>
