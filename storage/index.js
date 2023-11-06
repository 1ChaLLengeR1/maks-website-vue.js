import { createStore } from "vuex";
import optionsStore from "./options/index.js";
import adminPanel from './admin-panel/index.js'

const store = createStore({
  modules: {
    options: optionsStore,
    adminPanel: adminPanel
  },
});

export default store;
