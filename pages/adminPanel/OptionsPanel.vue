<template>
  <main class="main__options-panel__container">
    <confirmd-request v-if="offConfirmed"></confirmd-request>
    <popued-box v-if="offPopuedBox"></popued-box>
    <section class="main__container">
      <slide-bar v-if="navigation" @off-navigation="offNavigation"></slide-bar>
      <div class="navigation">
        <ul v-if="sildeBar">
          <navigation-item
            name="aboutme"
            nazwa="O mnie"
            :panel="true"
          ></navigation-item>
          <navigation-item
            name="projectadmin"
            nazwa="Dodaj projekt"
            :panel="true"
          ></navigation-item>
          <navigation-item
            name="listprojects"
            nazwa="Lista projektów"
            :panel="true"
          ></navigation-item>
          <button-logout @log-out="offAutomaticLogin"></button-logout>
        </ul>
        <toggle-button v-else @show-navigation="showNavigation"></toggle-button>
      </div>
      <div class="pages">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>
<script>
import ToggleButton from "../../components/Navigation-Panel/ToggleButton.vue";
import SlideBar from "../../components/Navigation-Panel/SildeBar.vue";
import ButtonLogout from "../../components/Navigation-Panel/ButtonLogout.vue";
import NavigationItem from "../../components/Navbar/components/Navigation-Item.vue";
import ConfirmdRequest from "../../components/util/ConfirmdRequest.vue";
import PopuedBox from "../../components/util/PopudBox.vue";
export default {
  components: {
    "toggle-button": ToggleButton,
    "slide-bar": SlideBar,
    "button-logout": ButtonLogout,
    "navigation-item": NavigationItem,
    "confirmd-request": ConfirmdRequest,
    "popued-box": PopuedBox,
  },
  data() {
    return {
      sildeBar: false,
      navigation: false,
      tryLogin: null,
    };
  },
  methods: {
    showNavigation(val) {
      this.navigation = val;
    },
    offNavigation(val) {
      this.navigation = val;
    },
    checkScreenwidth() {
      if (window.innerWidth >= 750) {
        this.sildeBar = true;
      } else {
        this.sildeBar = false;
      }
    },
    automaticLogin() {
      this.$store.dispatch("options/tryLogin");
      this.tryLogin = setInterval(async () => {
        this.$store.dispatch("options/tryLogin");
      }, 3600000);
    },
    offAutomaticLogin() {
      clearInterval(this.tryLogin);
    },
  },
  computed: {
    offConfirmed() {
      return this.$store.getters["adminPanel/confirmdOptions"].off;
    },
    offPopuedBox() {
      return this.$store.getters["adminPanel/confirmedPopuedBox"].off;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreenwidth);
    this.checkScreenwidth();
  },
  mounted() {
    this.$router.push("/options-panel/aboutme");
    this.automaticLogin();
  },
};
</script>

<style lang="scss" scoped>
.main__options-panel__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  background-color: #161a1d;
  .main__container {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    .navigation {
      width: 100%;
      display: flex;
      padding: 0.5rem;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }
    }
    .pages {
      width: 100%;
    }
  }
}
@media (min-width: 750px) {
  .main__options-panel__container {
    .main__container {
      flex-direction: row;

      .navigation {
        width: 25rem;
      }
    }
  }
}
</style>
