export default {
    template: /*html*/`
        <li class="p-3">
            <label>
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" />
            </label>
        </li>
    `,
    props: {
        assignment: {
            name: String,
            complete: Boolean
        },
    }
}