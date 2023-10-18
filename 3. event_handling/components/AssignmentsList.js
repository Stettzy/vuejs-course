import Assignment from "./Assignment.js"

export default {
    components: { Assignment },
    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="text-xl font-bold">{{ title }}</h1>
            <ul>
                <assignment 
                    v-for="assignment in assignments"
                    :assignment="assignment" 
                    :key="assignment.id">
                </assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}