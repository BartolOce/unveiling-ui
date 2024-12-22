<template>
  <SignupStep
    :image-src="currentStep.imageSrc"
    :title="currentStep.title"
    :description="currentStep.description"
    :progress-value="currentStep.progressValue"
    :next-page="currentStep.nextPage"
    :previous-page="currentStep.previousPage"
  />
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import SignupStep from "~/components/SignupStep.vue";

const steps = [
  {
    name: "age",
    imageSrc: "/Birthday.webp",
    title: "How old are you?",
    description: "Please select your age group from the options below.",
    progressValue: 10,
    nextPage: "/SignUp/age",
    previousPage: "/SignUp",
  },
  {
    name: "education-level",
    imageSrc: "/Birthday.webp",
    title: "Highest level of education?",
    description:
      "We are interested in understanding the educational background of our users.",
    progressValue: 20,
    nextPage: "/SignUp/education-level",
    previousPage: "/SignUp/age",
  },
  {
    name: "it-skills",
    imageSrc: "/Birthday.webp",
    title: "How would you rate your IT skills?",
    description:
      "We want to know how comfortable you are with using technology and computers.",
    progressValue: 30,
    nextPage: "/SignUp/it-skills",
    previousPage: "/SignUp/education-level",
  },
  {
    name: "online-shopping-habits",
    imageSrc: "/Birthday.webp",
    title: "How often do you shop online?",
    description:
      "Please select the option that best describes your frequency of online shopping.",
    progressValue: 40,
    nextPage: "/SignUp/online-shopping-habits",
    previousPage: "/SignUp/it-skills",
  },
  {
    name: "subscription-services",
    imageSrc: "/Birthday.webp",
    title: "Number of subscription services ?",
    description:
      "This question aims to understand your engagement with subscription-based online services.",
    progressValue: 50,
    nextPage: "/SignUp/subscription-services",
    previousPage: "/SignUp/online-shopping-habits",
  },
  {
    name: "user-experience",
    imageSrc: "/Birthday.webp",
    title: "Overall user experience on websites?",
    description:
      "We are interested in your general satisfaction with the user experience provided by websites.",
    progressValue: 60,
    nextPage: "/SignUp/user-experience",
    previousPage: "/SignUp/subscription-services",
  },
  {
    name: "navigating-websites",
    imageSrc: "/Birthday.webp",
    title: "Easiness of navigating websites?",
    description:
      "We want to know about your experience with website navigation and their user-friendliness.",
    progressValue: 70,
    nextPage: "/SignUp/navigating-websites",
    previousPage: "/SignUp/user-experience",
  },
  {
    name: "dark-pattern-awareness",
    imageSrc: "/Birthday.webp",
    title: "Have you ever heard of dark patterns?",
    description:
      "Don't worry if you have not, you are here to learn about them.",
    progressValue: 80,
    nextPage: "/SignUp/dark-pattern-awareness",
    previousPage: "/SignUp/navigating-websites",
  },
  {
    name: "understanding-dark-patterns",
    imageSrc: "/Birthday.webp",
    title: "What do you think dark patterns are?",
    description:
      "Please select the option that best matches your understanding of dark patterns.",
    progressValue: 90,
    nextPage: "/SignUp/understanding-dark-patterns",
    previousPage: "/SignUp/dark-pattern-awareness",
  },
];

const router = useRouter();
const route = useRoute();

const currentStep = steps.find((step) => step.name === route.params.name);

if (!currentStep) {
  router.push("/signup"); // Redirect to the main signup page if the step is invalid
}
</script>
