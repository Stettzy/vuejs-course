export default {
    template: /*html*/ `
        <div class="flex gap-2">
            <button 
                @click="$emit('change', tag)" 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-s"
                :class="{
                    'border-blue-500 text-blue-500': tag === activeTag 
                }">{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        activeTag: String
    },

    computed: {
        tags() {
            return new Set(this.initialTags);
        },
    },

    methods: {
        handleActiveTag(tag) {
            this.activeTag === tag ?
                this.activeTag = '' :
                this.activeTag = tag;
        }
    }
}