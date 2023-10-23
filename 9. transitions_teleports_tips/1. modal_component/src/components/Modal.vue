<script setup>
defineProps({
  show: Boolean,
});
</script>
<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
        <button @click="$emit('close')">Close</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}
.modal-container {
  padding: 15px;
  background-color: white;
  width: 80vw;
  max-width: 500px;
}
</style>
