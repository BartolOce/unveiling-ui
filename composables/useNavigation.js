import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import {
  AcademicCapIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CursorArrowRaysIcon,
  HomeIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";

export const useNavigation = () => {
  const route = useRoute();

  const navigation = ref([
    { name: "Home", href: "/application", icon: HomeIcon, current: true },
    {
      name: "Learn about them",
      href: "/application/about-dark-patterns",
      icon: AcademicCapIcon,
      current: false,
    },
    {
      name: "Interact with them",
      href: "/application/dark-pattern-types",
      icon: CursorArrowRaysIcon,
      current: false,
    },

    {
      name: "Achievements",
      href: "/application/achievements",
      icon: StarIcon,
      current: true,
    },
    {
      name: "Look at the stats",
      href: "/application/dashboard",
      icon: ChartBarIcon,
      current: false,
    },
  ]);

  const secondaryNavigation = ref([
    {
      name: "Settings",
      href: "/application/settings",
      icon: Cog6ToothIcon,
      current: true,
    },
  ]);

  const updateCurrentNavigation = () => {
    const currentPath = route.path;
    const baseUrl = "/application";

    const isCurrent = (href) => {
      if (currentPath === baseUrl) {
        return href === baseUrl;
      }
      if (currentPath.startsWith(baseUrl)) {
        const subPath = currentPath.slice(baseUrl.length + 1);
        const firstSegment = subPath.split("/")[0];
        return href === `${baseUrl}/${firstSegment}`;
      }
      return false;
    };

    navigation.value.forEach((item) => {
      item.current = isCurrent(item.href);
    });

    secondaryNavigation.value.forEach((item) => {
      item.current = isCurrent(item.href);
    });
  };

  watchEffect(updateCurrentNavigation);

  return {
    navigation: computed(() => navigation.value),
    secondaryNavigation: computed(() => secondaryNavigation.value),
  };
};
