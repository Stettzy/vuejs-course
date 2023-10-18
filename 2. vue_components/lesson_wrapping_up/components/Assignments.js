import AssignmentsList from "./AssignmentsList.js";

export default {
    components: { AssignmentsList },
    template: /*html*/ `
        <assignments-list :assignments="inProgressAssignments" title="In Progress"></assignments-list>
        <hr class="my-20">
        <assignments-list :assignments="completedAssignments" title="Completed"></assignments-list>
    `,
    data() {
        return {
            assignments: [
                { id: 1, name: 'Finish homework', complete: false },
                { id: 2, name: 'Read book', complete: false },
                { id: 3, name: 'Submit paper', complete: false },
            ]
        }
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        },

        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        }
    }
}