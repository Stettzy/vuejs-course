export default {
    template: /*html*/`
        <div>
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading"/>
            </h2>
            <slot/>
        </div>
    `,
}