<template>
  <div class="w-full px-4 py-7">
    <div class="mx-auto w-full max-w-md">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Options</RadioGroupLabel>
        <div class="space-y-2">
          <RadioGroupOption
            v-for="answer in answers"
            :key="answer.text"
            v-slot="{ active, checked }"
            :value="answer"
            as="template"
          >
            <div
              :class="[
                active ? ' ' : '',
                checked ? 'bg-cyan-600 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 border border-gray-300 focus:outline-none"
              style="min-height: 3.5rem"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ answer.text }}
                    </RadioGroupLabel>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const props = defineProps({
  answers: {
    type: Array,
    required: true,
  },
  selectedAnswer: {
    type: Object,
    required: true,
  },
  nextPage: {
    type: String,
    required: true,
  },
  previousPage: {
    type: String,
    required: true,
  },
});

const { setNextPage, setPreviousPage } = useNavigationState();

onMounted(() => {
  setNextPage(`${props.nextPage}`);
  setPreviousPage(`${props.previousPage}`);
});

const emits = defineEmits(["update:selectedAnswer"]);

const selected = ref(props.selectedAnswer);

watch(selected, (newValue) => {
  emits("update:selectedAnswer", newValue);
});
</script>
