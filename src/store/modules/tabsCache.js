import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    tabs: null,
    operatorsList: {},
    operators: {},
  },
  mutations: {
    setTabs(state, tabsData) {
      state.tabs = tabsData;
    },
    setOperatorsList(state, { key, list }) {
      Vue.set(state.operatorsList, key, list);
    },
    setOperator(state, { key, list }) {
      Vue.set(state.operators, key, list);
    },
  },
};
