<template>
  <div class="grid-wraper">
    <the-carusel
      v-if="close_carusel"
      :images="images"
      :index="index_image"
      @close-carusel="openCarusel"
    ></the-carusel>
    <div
      class="item_image"
      v-for="(image, index) in images"
      :key="image"
      @click="openCarusel({
        value: true,
        index: index
      })"
    >
      <img :src="image.link" alt="photo-project" />
    </div>
  </div>
</template>

<script>
import Carusel from "../util/Carusel.vue";
import { ref } from "vue";
export default {
  components: {
    "the-carusel": Carusel,
  },
  props: ["images"],
  setup() {
    //values
    const close_carusel = ref(false);
    const index_image = ref(0);

    //functions
    const openCarusel = (val) => {
      close_carusel.value = val.value;
      index_image.value = val.index;
    };

    return { close_carusel, openCarusel, index_image };
  },
};
</script>

<style lang="scss" scoped>
.grid-wraper {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  .item_image {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      padding: 0.2rem;
      background-color: #161a1d;
      box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);
    }
  }
}

.item_image:nth-child(n + 0) {
  grid-column: span 2;
}
.item_image:nth-child(2n + 0) {
  grid-row: span 2;
}
.item_image:nth-child(3n + 0) {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
