<script setup>
import { store } from "../stores/textareaStore";
defineProps({
  comment: String,
});

const onTabPress = (e) => {
  let textarea = e.target;

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);
};

const update = (e) => {
  console.log();
  store.name = e.target.value;
};
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @input="update"
    v-text="store.name"
  ></textarea>
</template>
