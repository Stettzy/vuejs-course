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

const update = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <textarea
    ref="textarea"
    @keydown.tab.prevent="onTabPress"
    @keyup.prevet="update"
    v-text="modelValue"
  ></textarea>
</template>
