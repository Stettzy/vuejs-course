import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },
    template: /*html*/ `
        <assignments-list :assignments="filter.inProgress" title="In Progress"></assignments-list>
        <hr class="my-20">
        <assignments-list :assignments="filter.complete" title="Completed"></assignments-list>
        <assignment-create @add="add"></assignment-create>
    `,
    data() {
        return {
            assignments: [
                { id: 1, name: 'Finish homework', complete: false, tag: 'Science' },
                { id: 2, name: 'Read book', complete: false, tag: 'Math' },
                { id: 3, name: 'Submit paper', complete: false, tag: 'Geography' },
            ],
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
    }
}