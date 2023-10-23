<script setup>
import { useCounterStore } from "../stores/CounterStore";

const counter = useCounterStore();
</script>

<template>
  <p class="text-white text-xl">{{ counter.count }}</p>
  <p>Remaining clicks: {{ counter.remaining }}</p>
  <button @click="counter.increment">Increment</button>
</template>
