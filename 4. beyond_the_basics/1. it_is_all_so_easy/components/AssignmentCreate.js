export default {
    template: /*html*/ `
        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="New assignment" class="border border-gray-600 p-2"/>
            <button type="submit" class="border border-gray-600 p-2">submit</button>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}