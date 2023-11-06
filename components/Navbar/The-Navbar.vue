<template>
  <nav>
    <slidebar-background
      v-if="sildeBar"
      @off-Background="offBackground"
    ></slidebar-background>
    <Transition name="navSlide">
      <slide-bar
        v-if="sildeBar"
        @off-background="offBackgroundItem"
      ></slide-bar>
    </Transition>
    <the-title></the-title>
    <the-navigation
      @toogle-button-value="valueToogleButton"
      :valueButton="this.sildeBar"
    ></the-navigation>
  </nav>
</template>

<script>
import Title from "./components/The-Title.vue";
import Navigation from "./components/The-Navigation.vue";
import SlideBar from "./components/SlideBar.vue";
import BackgroundSlideBar from "./components/BackgroundSildeBar.vue";
export default {
  components: {
    "the-title": Title,
    "the-navigation": Navigation,
    "slide-bar": SlideBar,
    "slidebar-background": BackgroundSlideBar,
  },
  data() {
    return {
      scrollNav: false,
      sildeBar: false,
      title: false,
    };
  },
  methods: {
    valueToogleButton(val) {
      this.sildeBar = val;
    },
    offBackground(val) {
      this.sildeBar = val;
    },
    offBackgroundItem(val) {
      this.sildeBar = val;
    },
    checkScreenwidth() {
      if (window.innerWidth >= 770) {
        this.sildeBar = false;
        this.title = false;
      } else {
        this.title = true;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreenwidth);
    this.checkScreenwidth();
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161a1d;

  @media (min-width: 770px){
    min-height: 8rem;
    padding: 1rem;
  }
}
.navSlide-enter-from,
.navSlide-leave-to {
  opacity: 0;
  transform: translateX(-250px);
}
.navSlide-enter-active {
  transition: all 0.5s ease-out;
}
.navSlide-leave-active {
  transition: all 0.5s ease-in;
}

.navSlide-enter-to,
.navSlide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
