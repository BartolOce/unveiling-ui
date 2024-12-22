<template>
  <SignupStep
    :image-src="step.imageSrc"
    :title="step.title"
    :description="step.description"
    :progress-value="step.progressValue"
    :next-page="step.nextPage"
  />
</template>

<script setup>
const step = {
  name: "home",
  imageSrc: "/Birthday.webp",
  title: "Welcome to Our Signup Process",
  description:
    "Create a new account in a few steps by filling up a short form.",
  progressValue: 0,
  nextPage: "/SignUp/age-info",
  previousPage: "age",
};
</script>
