<script setup>
import { ref } from "vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "../stores/TeamStore";
import Modal from "../components/Modal.vue";
let team = useTeamStore();

team.init();
let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
    <Modal :show="showModal" @close="showModal = false">
      <template #header> OK </template>
      <template #main> OK MAIN </template>
      <template #footer> OK Footer </template>
    </Modal>
  </div>

  <TeamFooter />
</template>
