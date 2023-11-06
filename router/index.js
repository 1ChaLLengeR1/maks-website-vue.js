import { createRouter, createWebHistory } from "vue-router";
import store from "../storage/index.js";

//Defoult Routers
import Home from "../pages/Home.vue";
import AboutMe from "../pages/adminPanel/AboutMe.vue";
import Contact from "../pages/Contact.vue";
import Projects from "../pages/Projects.vue";
import LoginPanel from "../pages/LoginPanel.vue";
import SinglePost from "../pages/SingleProject.vue";
import Page404 from "../pages/Page404.vue";

//AdminPanel
import OptionsPanel from "../pages/adminPanel/OptionsPanel.vue";
import ProjectAdmin from '../pages/adminPanel/ProjectPanel.vue'
import ListProjects from '../pages/adminPanel/ListProjects.vue'
import EditProject from "../pages/adminPanel/EditProject.vue"



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { name: "home", path: "/about-me", component: Home },
    { name: "projects", path: "/projects", component: Projects },
    {
      name: "single-project",
      path: "/single-project/:id",
      component: SinglePost,
    },
    { name: "contact", path: "/contact", component: Contact },
    { name: "login-panel", path: "/login-panel", component: LoginPanel },
    { name: "not-found", path: "/:pathMatch(.*)*", component: Page404 },
    {
      name: "options-panel",
      path: "/options-panel",
      component: OptionsPanel,
      meta: { auth: true },
      children: [
        {
          name: "aboutme",
          path: "aboutme",
          component: AboutMe,
          meta: { auth: true },
        },
        {
          name: "projectadmin",
          path: "projectadmin",
          component: ProjectAdmin,
          meta: { auth: true },
        },
        {
          name: "listprojects",
          path: "listprojects",
          component: ListProjects,
          meta: { auth: true },
        },
        {
          name: "editproject",
          path: "editproject/:id",
          component: EditProject,
          meta: { auth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = store.getters["options/saveTokens"].accesToken;
  const refresh = store.getters["options/saveTokens"].refreshToken;

  if (to.meta.auth && auth === null && refresh === null) {
    next("/");
  } else {
    next();
  }
});

export default router;
