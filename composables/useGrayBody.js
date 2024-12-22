import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  document.documentElement.classList.add("h-full", "bg-gray-100");
  document.body.classList.add("h-full");
});

onBeforeUnmount(() => {
  document.documentElement.classList.remove("h-full", "bg-gray-100");
  document.body.classList.remove("h-full");
});
