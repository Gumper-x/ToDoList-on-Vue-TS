import Vue from "vue";
import Vuex from "vuex";
import Task from "@/store/modules/task";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Task,
  },
});
export default store;
