import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        sidebar: true,
    },

    getters: {
        sidebar: state => state.sidebar,
    },
    
    mutations: {
        mutateSidebarStatus(state) {
            state.sidebar = !state.sidebar;
        },
    },

    actions: {
        updateSidebarStatus(ctx) {
            ctx.commit('mutateSidebarStatus');
        },
    },
});

export default store;