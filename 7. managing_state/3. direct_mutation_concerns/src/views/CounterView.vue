<script setup>
import { counter } from "../stores/counterStore";
</script>

<template>
  <p class="text-white text-xl">{{ counter.count }}</p>
  <button @click="counter.increment">Increment</button>
</template>
