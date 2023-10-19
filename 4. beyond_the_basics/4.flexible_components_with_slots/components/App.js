import Panel from './Panel.js';
import Assignments from "./Assignments.js"

export default {
    components: {
        'panel': Panel,
        'assignments': Assignments
    },
    template: /*html*/`
        <panel>
            <template v-slot:default>
                <assignments></assignments>
            </template>
            <template v-slot:heading>
                We good
            </template>
        </panel>
    `,
}