import { watch, ref } from "vue";

export const useLocalStorage = (key) => {
    let storedVal = localStorage.getItem(key);
    let val = ref(storedVal);

    watch(val, () => {
        write();
    })

    const write = () => {
        if (val.value === '') {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, val.value);
    }

    return val;
}