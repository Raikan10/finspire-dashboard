import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Has to be set to false and empty before hosting
    isDecrypt: false,
    privateKey: ""
  },
  mutations: {
    TOGGLE_DECRYPT(state) {
      state.isDecrypt = !state.isDecrypt;
    },
    SET_KEY(state, payload) {
      state.privateKey = payload;
    }
  },
  actions: {
    toggleDecrypt(context) {
      context.commit("TOGGLE_DECRYPT", null);
    },
    setKey(context, key) {
      context.commit("SET_KEY", key);
    }
  },
  getters: {
    getDecrypt(state) {
      return state.isDecrypt;
    },
    getKey(state) {
      return state.privateKey;
    }
  },
  modules: {}
});
