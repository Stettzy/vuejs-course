import Assignment from "./Assignment.js"

export default {
    components: { Assignment },
    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="text-xl font-bold">{{ title }}<span>({{assignments.length}})</span></h1>
            <div class="flex gap-2">
                <button 
                    @click="handleActiveTag(tag)" 
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-s"
                    :class="{
                        'border-blue-500 text-blue-500': tag === activeTag 
                    }">{{ tag }}</button>
            </div>
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
        tags() {
            return new Set(this.assignments.map((assignment) => assignment.tag));
        },
        filteredAssignments() {
            if (this.activeTag !== '') {
                return this.assignments.filter((assignment) => assignment.tag === this.activeTag)
            }
            // else {
            return this.assignments;
            // }
        }
    },

    methods: {
        handleActiveTag(tag) {
            this.activeTag === tag ?
                this.activeTag = '' :
                this.activeTag = tag;
        }
    }
}