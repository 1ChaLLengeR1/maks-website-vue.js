<template>
  <div class="main__projects__container">
    <h1>Galeria projektów</h1>
    <ul>
      <item-project
        v-for="item in loadProject"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :link="item.link_image"
        :short_description="item.short_description"
      ></item-project>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ItemProject from "../components/Projects/ItemProject.vue";
export default {
  components: {
    "item-project": ItemProject,
  },
  setup() {
    //values
    const store = useStore();

    //functions
    store.dispatch("adminPanel/loadProjects");

    //computed
    const loadProject = computed(() => {
      return store.getters["adminPanel/loadProjects"];
    });

    return { loadProject };
  },
};
</script>

<style lang="scss" scoped>
.main__projects__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  background-color: #161a1d;
  padding: 0.5rem;
  h1 {
    margin: 0;
    font-size: 70px;
    background: -webkit-linear-gradient(90deg, #161a1d, #ba181b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
@media (min-width: 770px) {
  .main__projects__container {
    ul {
      width: 70%;
    }
  }
}
</style>
