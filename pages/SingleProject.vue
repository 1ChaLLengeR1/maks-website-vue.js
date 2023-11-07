<template>
  <div class="main__singleProject__container">
    <div class="box__container">
      <title-description
        :name="item_project.name"
        :description="item_project.description"
      ></title-description>
      <box-images :images="item_project.images_project"></box-images>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, reactive, watch } from "vue";
import TitleDescription from "../components/SinglePost/TitleDescription.vue";
import BoxImage from "../components/SinglePost/BoxImages.vue";
export default {
  components: {
    "title-description": TitleDescription,
    "box-images": BoxImage,
  },
  setup() {
    //values
    const router = useRoute();
    const store = useStore();
    const item_project = reactive({
      id: "",
      name: "",
      description: "",
      numeric: "",
      images_project: [],
    });

    //functions
    store.dispatch("adminPanel/loadSingleProject", router.params.id);

    //computed
    const loadSinglePoroject = computed(() => {
      return store.getters["adminPanel/loadSingleProject"];
    });

    //watacherss
    watch(loadSinglePoroject, (newVal) => {
      item_project.id = newVal.id;
      item_project.name = newVal.name;
      item_project.description = newVal.description;
      item_project.numeric = newVal.numeric;
      item_project.images_project = newVal.images_project;
    });

    return { item_project, loadSinglePoroject };
  },
};
</script>

<style lang="scss" scoped>
.main__singleProject__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  background-color: #161a1d;
  padding: 0.5rem;

  .box__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
@media (min-width: 770px) {
  .main__singleProject__container {
    .box__container {
      width: 70%;
    }
  }
}
</style>
