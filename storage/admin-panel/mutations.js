export default {
  dataAboutMe(state, payload) {
    for (const index in payload) {
      state.aboutMe[index].id = payload[index].id;
      state.aboutMe[index].information = payload[index].information;
      state.aboutMe[index].language = payload[index].language;
    }
  },
  loadProjects(state, payload) {
    state.projects = [];
    if (payload.length === 0) {
      state.projects = [];
      return;
    }
    for (const item of payload) {
      state.projects.push(item);
    }
  },
  loadSingleProject(state, payload) {
    state.loadSingleProject = {
      id: payload.id,
      name: payload.name,
      short_description: payload.short_description,
      description: payload.description,
      numeric: payload.numeric,
      name_folder: payload.name_folder,
      image_project: payload.image_project,
      images_project: payload.images_project,
    };
  },
  confirmdOptions(state, payload) {
    state.ConfirmdOptions = {
      off: payload.off,
      title: payload.title,
      fetchApi: {
        link: payload.fetchApi.link,
        method:payload.fetchApi.method,
        body: payload.fetchApi.body,
      },
      loadDataBase: payload.loadDataBase,
      params: payload.params,
    };
  },
  confirmdErrors(state, payload) {
    state.errors = payload;
  },
  confirmedPopuedBox(state, payload) {
    state.popuedBox = {
      off: payload.off,
      information: payload.information,
      bgcolor: payload.bgcolor,
    };
  },
};
