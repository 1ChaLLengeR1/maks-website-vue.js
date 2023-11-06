<template>
  <div class="carusel__container">
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
        @click="closeCarusel"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
    <div class="carusel">
      <img class="main__image" :src="image" alt="photo_project" />
      <div class="arrows">
        <img
          @click="changeImage('-')"
          class="arrow_left"
          src="../../images/left.png"
          alt="arrow-left"
        />
        <img
          @click="changeImage('+')"
          class="arrow_right"
          src="../../images/right.png"
          alt="arrow-right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
export default {
  props: ["images", "index"],
  emits: ["close-carusel"],
  setup(props, context) {
    //values

    const { images, index } = toRefs(props);
    const index_image = ref(0);
    const image = ref("");

    index_image.value = index.value;
    image.value = images.value[index_image.value].link;

    //functions

    const changeImage = (value) => {
      if (value === "+") {
        if (index_image.value === images.value.length-1) {
          index_image.value = -1;
        }
        index_image.value = index_image.value + 1;
        image.value = images.value[index_image.value].link;
      }
      if (value === "-") {
        if (index_image.value === 0) {
          index_image.value = images.value.length;
        }
        index_image.value = index_image.value - 1;
        image.value = images.value[index_image.value].link;
      }
    };

    const closeCarusel = () => {
      context.emit("close-carusel", {
        value: false,
        index: 0,
      });
    };
    return { closeCarusel, image, changeImage };
  },
};
</script>

<style lang="scss" scoped>
.carusel__container {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background-color: #161a1d;

  .icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    svg {
      width: 3rem;
      height: 3rem;
      border-radius: 5px;
      fill: #161a1d;
      background-color: black;
      border-radius: 50%;
      padding: 2px;
      cursor: pointer;
    }
  }
  .carusel {
    width: 100%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .main__image {
      position: absolute;
      z-index: 10;
      max-width: 100%;
      max-height: 100%;
      padding: 0.2rem;
    }
    .arrows {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 11;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0.2rem;
      .arrow_left,
      .arrow_right {
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 770px) {
  .carusel__container {
    .icon {
      width: 70%;
    }
    .carusel {
      width: 70%;

      .arrows {
        align-items: center;
      }
    }
  }
}
</style>
