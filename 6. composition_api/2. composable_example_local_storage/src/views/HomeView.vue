<script setup>
import { ref, watch } from "vue";
import { useLocalStorage } from "@/composables/useLocalStorage.js";

let food = useLocalStorage("food"),
  age = useLocalStorage("age");
</script>

<template>
  <main>
    <p>
      What's your favorite food?
      <input type="text" v-model="food" />
    </p>
    <p>What's your age? <input type="text" v-model="age" /></p>
  </main>
</template>
