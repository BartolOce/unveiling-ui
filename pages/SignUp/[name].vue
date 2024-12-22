<template>
  <div class="w-full">
    <SignupRadioGroup
      :answers="options"
      :selected-answer="selectedOption"
      @update:selected-answer="updateSelectedOption"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNavigationState } from "@/composables/useNavigationState";

const steps = [
  {
    name: "age",
    options: [
      { text: "Under 18" },
      { text: "18-24" },
      { text: "25-34" },
      { text: "35 and older" },
    ],
    nextPage: "/SignUp/education-level-info",
    previousPage: "/SignUp/age-info",
  },
  {
    name: "education-level",
    options: [
      { text: "High School or below" },
      { text: "Associate Degree" },
      { text: "Bachelor’s Degree" },
      { text: "Master's Degree or higher" },
    ],
    nextPage: "/SignUp/it-skills-info",
    previousPage: "/SignUp/education-level-info",
  },
  {
    name: "it-skills",
    options: [
      { text: "Tech newbie figuring things out" },
      { text: "Confident user who gets things done" },
      { text: "Tech-savvy and pretty handy with gadgets" },
      { text: "IT wizard, the go-to person for tech issues" },
    ],
    nextPage: "/SignUp/online-shopping-habits-info",
    previousPage: "/SignUp/it-skills-info",
  },
  {
    name: "online-shopping-habits",
    options: [
      { text: "Rarely, prefer in-store browsing" },
      { text: "Sometimes, when the mood strikes" },
      { text: "Regularly, love the convenience" },
      { text: "Always, it's my main way to shop" },
    ],
    nextPage: "/SignUp/subscription-services-info",
    previousPage: "/SignUp/online-shopping-habits-info",
  },
  {
    name: "subscription-services",
    options: [
      { text: "None, not my thing" },
      { text: "A couple, keeping it simple" },
      { text: "A handful, enjoy the variety" },
      { text: "Too many to count, I love my subscriptions" },
    ],
    nextPage: "/SignUp/user-experience-info",
    previousPage: "/SignUp/subscription-services-info",
  },
  {
    name: "user-experience",
    options: [
      { text: "Frustrated, often leaving the site quickly" },
      { text: "Meh, could be better" },
      { text: "Generally pleased, it gets the job done" },
      { text: "Thrilled, it's a smooth ride" },
    ],
    nextPage: "/SignUp/navigating-websites-info",
    previousPage: "/SignUp/user-experience-info",
  },
  {
    name: "navigating-websites",
    options: [
      { text: "Feels like a maze, always lost" },
      { text: "Somewhat challenging, but manageable" },
      { text: "Mostly smooth, with a few bumps" },
      { text: "Super easy, I can find anything in seconds" },
    ],
    nextPage: "/SignUp/dark-pattern-awareness-info",
    previousPage: "/SignUp/navigating-websites-info",
  },
  {
    name: "dark-pattern-awareness",
    options: [
      { text: "No, this is completely new to me" },
      { text: "Maybe, it sounds familiar" },
      { text: "I've heard the term, but not sure what it means" },
      { text: "Absolutely, I know them well" },
    ],
    nextPage: "/SignUp/understanding-dark-patterns-info",
    previousPage: "/SignUp/dark-pattern-awareness-info",
  },
  {
    name: "understanding-dark-patterns",
    options: [
      { text: "Design elements that enhance user experience" },
      { text: "Design tactics used to mislead or trick users" },
      { text: "Security measures for protecting user data" },
      { text: "Advertising strategies to attract users" },
    ],
    nextPage: "/application",
    previousPage: "/SignUp/understanding-dark-patterns-info",
  },
];

const router = useRouter();
const route = useRoute();
const pageName = route.params.name;

const currentStep = steps.find((step) => step.name === pageName);

if (!currentStep) {
  router.push("/signup"); // Redirect to the main signup page if the step is invalid
}

const options = ref(currentStep?.options || []);

const selectedOption = ref(options.value[0]);

const updateSelectedOption = (newOption) => {
  selectedOption.value = newOption;
};

const { setNextPage, setPreviousPage } = useNavigationState();

onMounted(() => {
  if (currentStep) {
    options.value = currentStep.options;
    selectedOption.value = options.value[0];
    setNextPage(currentStep.nextPage);
    setPreviousPage(currentStep.previousPage);
  } else {
    router.push("/signup"); // Redirect to the main signup page if the step is invalid
  }
});
</script>
