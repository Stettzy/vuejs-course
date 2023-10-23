import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        }
    },

    actions: {
        increment() {
            this.count++;
        }
    },

    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
})