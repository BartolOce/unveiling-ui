// composables/useNavigationState.js
import { useState } from "nuxt/app";

export const useNavigationState = () => {
  const nextPage = useState("nextPage", () => "/SignUp/age-info");
  const previousPage = useState("previousPage", () => "/SignUp/start");

  const setNextPage = (newNextPage) => {
    nextPage.value = newNextPage;
  };

  const setPreviousPage = (newPreviousPage) => {
    previousPage.value = newPreviousPage;
  };

  return {
    nextPage,
    previousPage,
    setNextPage,
    setPreviousPage,
  };
};
