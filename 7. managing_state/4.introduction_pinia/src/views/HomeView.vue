<script setup>
import { ref } from "vue";
import { store } from "../stores/textareaStore";
import TabableTextarea from "@/components/TabableTextarea.vue";
</script>

<template>
  <main>
    <form>
      <TabableTextarea style="height: 300px; width: 100%" />
    </form>
  </main>
</template>
