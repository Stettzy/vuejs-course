import swal from "sweetalert";

export const useFlash = () => {
    const flash = (message) => {
        return swal('Success!', message, 'success');
    }

    return { flash };
}