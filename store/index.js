import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        sidebar: true,
        whiteTheme: false,
    },

    getters: {
        sidebar: state => state.sidebar,
        whiteTheme: state => state.whiteTheme,
    },
    
    mutations: {
        mutateSidebarStatus(state) {
            state.sidebar = !state.sidebar;
        },
        
        mutateTheme(state) {
            state.whiteTheme = !state.whiteTheme;
        },
    },

    actions: {
        updateSidebarStatus(ctx) {
            ctx.commit('mutateSidebarStatus');
        },

        updateTheme(ctx) {
            ctx.commit('mutateSidebarStatus');
        }
    },
});

export default store;