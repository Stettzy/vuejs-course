<script setup>
import { ref } from "vue";
import TabableTextarea from "@/components/TabableTextarea.vue";

let comment = ref("Your comment");
</script>

<template>
  <main>
    <form>
      <TabableTextarea v-model="comment" style="height: 300px; width: 100%" />
    </form>
  </main>
</template>
