export default {
  async loadDataBaseAboutMe(context) {
    const nullArray = [
      { id: null, information: null, language: null },
      { id: null, information: null, language: null },
    ];
    context.commit("dataAboutMe", nullArray);
    const respone = await fetch(
      "https://projekt1.server.arturscibor.pl/AboutMe",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await respone.json();
    if (!respone.ok) {
      context.commit("confirmdErrors", responseData);
    }
    context.commit("dataAboutMe", responseData);
  },
  async loadProjects(context) {
    const response = await fetch(
      "https://projekt1.server.arturscibor.pl/routers/projects/get_projects",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      context.commit("confirmdErrors", responseData);
    }
    context.commit("loadProjects", responseData);
  },
  async loadSingleProject(context, payload) {
    const response = await fetch(
      "https://projekt1.server.arturscibor.pl/routers/projects/get_singleProject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: payload }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      context.commit("confirmdErrors", responseData);
    }
    context.commit("loadSingleProject", responseData);
  },
};
