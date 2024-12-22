import { ref } from "vue";

const isOpen = ref(false);

function openPopup() {
  isOpen.value = true;
}

function closePopup() {
  isOpen.value = false;
}

export { isOpen, openPopup, closePopup };
