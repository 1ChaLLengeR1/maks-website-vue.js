<template>
  <div class="main__home__container">
    <box-information
      :polish="item_language.polish"
      :english="item_language.english"
    ></box-information>
    <box-image></box-image>
  </div>
</template>

<script>
import BoxInformation from "../components/components-home/BoxInformation.vue";
import BoxImage from "../components/components-home/BoxImage.vue";
import { reactive, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    "box-information": BoxInformation,
    "box-image": BoxImage,
  },
  setup() {
    //values
    const store = useStore();
    const item_language = reactive({
      polish: "",
      english: "",
    });

    //functions
    store.dispatch("adminPanel/loadDataBaseAboutMe");

    //computed
    const loadAboutMe = computed(() => {
      return store.getters["adminPanel/loadAboutMe"];
    });

    //watchers
    watch(loadAboutMe.value, (newVal, oldVal) => {
      item_language.polish = newVal[0].information;
      item_language.english = newVal[1].information;
    });

    // halo

    return { item_language, loadAboutMe };
  },
};
</script>

<style lang="scss" scoped>
.main__home__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  background-color: #161a1d;
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    flex-direction: row;
  }
}
</style>
