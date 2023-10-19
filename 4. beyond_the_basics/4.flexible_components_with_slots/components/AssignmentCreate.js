export default {
    template: /*html*/ `
        <form @submit.prevent="add">
            <div class="flex">
                <input v-model="newAssignment" placeholder="New assignment" class="w-full border border-gray-600 p-2"/>
                <button type="submit" class="border border-gray-600 p-2">submit</button>
            </div>
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