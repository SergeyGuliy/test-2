import Vue from 'vue';
import Vuex from 'vuex';
import tabsCache from './modules/tabsCache';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabsCache,
  },
});
