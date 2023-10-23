import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        async init() {
            let r = await import('../team.json');
            this.$state = r.default;

            // import('../team.json').then(r => {
            //     console.log(r.default);
            //     let data = await r.default;

            //     // 1. One way to do it
            //     // this.name = data.name;
            //     // this.spots = data.spots;
            //     // this.members = data.members;

            //     // 2. Another way to do it
            //     // this.$patch({
            //     //     name: data.name,
            //     //     spots: data.spots,
            //     //     members: data.members
            //     // })

            //     // 3. Another way to do it
            //     let r = await import('../team.json');
            //     this.$state = r.default;
            // })
        }
    },

    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }
})