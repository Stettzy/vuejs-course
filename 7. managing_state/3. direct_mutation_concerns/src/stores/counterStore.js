import { reactive } from "vue"
export const counter = reactive({
    // State
    count: 0,

    // Actions
    increment() {
        this.count++;
    }
})