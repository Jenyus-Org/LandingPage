import i18n, { selectedLocale } from "@/plugins/i18n";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: selectedLocale,
  },
  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale;
    },
  },
  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale; // important!
      commit("updateLocale", newLocale);
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["locale"],
    }),
  ],
});
