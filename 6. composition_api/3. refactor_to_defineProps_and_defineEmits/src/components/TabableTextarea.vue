<script setup>
defineProps({
  modelValue: String,
});

let emit = defineEmits(["update:modelValue"]);

const onTabPress = (e) => {
  let textarea = e.target;

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);
};
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-model="comment"
  ></textarea>
</template>
