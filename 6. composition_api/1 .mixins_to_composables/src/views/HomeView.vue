<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <main>
    <p><button @click="flash('oki')">test</button></p>
  </main>
</template>
