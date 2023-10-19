import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
    components: { Assignment, AssignmentTags },
    template: /*html*/`
        <section v-show="assignments.length" class="w-80 bg-purple-700 border p-4 rounded-xl border-gray-500">
            <div class="flex justify-between items-start mb-3">
                <h1 class="text-xl font-bold">
                    {{ title }}
                    <span>({{assignments.length}})</span>
                </h1>
                <button v-if="canHide" @click="$emit('hide')">&times;</button>
            </div>
            <assignment-tags :initial-tags="assignments.map((a) => a.tag)" :active-tag="activeTag" @change='handleActiveTag($event)'></assignment-tags>
            <ul class="border divide-y divide-gray 600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment" 
                    :key="assignment.id">
                </assignment>
            </ul>
            <slot></slot>
        </section>
    `,
    data() {
        return {
            activeTag: ''
        }
    },

    props: {
        assignments: Array,
        title: String,
        canHide: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        filteredAssignments() {
            if (this.activeTag !== '') {
                return this.assignments.filter((assignment) => assignment.tag === this.activeTag)
            }

            return this.assignments;
        }
    },

    methods: {
        handleActiveTag(tag) {
            if (this.activeTag !== tag) {
                return this.activeTag = tag;
            }

            return this.activeTag = '';
        }
    }
}