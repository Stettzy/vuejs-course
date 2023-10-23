<script setup>
import { Transition } from "vue";
defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="fade" mode="out-in">
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
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  transition: opacity 1s; /* Define your transition here */
}

.modal-container {
  padding: 15px;
  background-color: white;
  width: 80vw;
  max-width: 500px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s; /* Define your transition here */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
