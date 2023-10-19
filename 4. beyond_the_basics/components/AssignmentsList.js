import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
    components: { Assignment, AssignmentTags },
    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="text-xl font-bold">{{ title }}<span>({{assignments.length}})</span></h1>
            <assignment-tags :initial-tags="assignments.map((a) => a.tag)" :active-tag="activeTag" @change='activeTag = $event'></assignment-tags>
            <ul class="border border-gray-600 divide-y divide-gray 600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment" 
                    :key="assignment.id">
                </assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            activeTag: ''
        }
    },

    props: {
        assignments: Array,
        title: String
    },

    computed: {
        filteredAssignments() {
            if (this.activeTag !== '') {
                return this.assignments.filter((assignment) => assignment.tag === this.activeTag)
            }

            return this.assignments;
        }
    },
}