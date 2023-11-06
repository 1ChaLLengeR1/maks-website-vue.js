<template>
  <div class="slideBar">
    <div class="close">
      <div class="button" @click="offNavigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            @click="offNavigation"
          />
        </svg>
      </div>
    </div>
    <ul>
      <navigation-item
        name="aboutme"
        nazwa="O mnie"
        :panel="true"
        @click="offNavigation"
      ></navigation-item>
      <navigation-item
        name="projectadmin"
        nazwa="Dodaj projekt"
        :panel="true"
        @click="offNavigation"
      ></navigation-item>
      <navigation-item
        name="listprojects"
        nazwa="Lista projektów"
        :panel="true"
        @click="offNavigation"
      ></navigation-item>
      <button-logout></button-logout>
    </ul>
  </div>
</template>

<script>
import NavigationItem from "../../components/Navbar/components/Navigation-Item.vue";
import ButtonLogout from "../Navigation-Panel/ButtonLogout.vue";
export default {
  emits: ["off-navigation"],
  components: {
    "navigation-item": NavigationItem,
    "button-logout": ButtonLogout
  },
  data() {
    return {};
  },
  methods: {
    offNavigation() {
      this.$emit("off-navigation", false);
    },
    checkScreenwidth() {
      if (window.innerWidth >= 750) {
        this.$emit("off-navigation", false);
      }
    },
    offBackGround() {
      this.$emit("off-navigation", false);
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreenwidth);
    this.checkScreenwidth();
  },
};
</script>

<style lang="scss" scoped>
.slideBar {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #212529;
  .close {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .button {
      height: 100%;
      display: flex;
      align-items: center;
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    margin: 0;
  }
}
</style>
