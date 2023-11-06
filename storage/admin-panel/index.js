import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      aboutMe: [
        { id: null, information: null, language: null },
        { id: null, information: null, language: null },
      ],
      projects: [],
      ConfirmdOptions: {
        off: false,
        title: null,
        fetchApi: {
          link: null,
          method: null,
          body: {},
        },
        loadDataBase: null,
        params: null,
      },
      errors: {},
      popuedBox: {
        off: null,
        information: null,
        bgcolor: null,
      },
      loadPosts: [],
      loadSingleProject: {
        id: "",
        name: "",
        short_description: "",
        description: "",
        numeric: null,
        name_folder: "",
        image_project: [],
        images_project: [],
      },
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
