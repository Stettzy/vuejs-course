import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },
    template: /*html*/ `
        <section class="flex gap-8"> 
            <assignments-list :assignments="filter.inProgress" title="In Progress" :can-hide="false">
                <assignment-create @add="add"></assignment-create>
            </assignments-list>
            <hr class="my-20">
            <assignments-list :assignments="filter.complete" title="Completed" v-if="showCompleted" @hide="showCompleted = !showCompleted"></assignments-list>
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },

    computed: {
        filter() {
            return {
                complete: this.assignments.filter(assignment => assignment.complete),
                inProgress: this.assignments.filter(assignment => !assignment.complete)
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    },

    created() {
        const endpoint = 'http://localhost:3001/assignments';
        fetch(endpoint)
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    }
}