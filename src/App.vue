<template>
  <div class="app">
    <loading-spinner v-if="loadingSpinner"></loading-spinner>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import LoadingSpinner from "../components/util/LoadingSPinner.vue";
import NavBar from "../components/Navbar/The-Navbar.vue";
import Footer from "../components/util/Footer.vue";
export default {
  components: {
    "nav-bar": NavBar,
    "loading-spinner": LoadingSpinner,
    "the-footer":Footer
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    loadingSpinner() {
      return this.$store.getters["options/loadingSpinner"];
    },
  },
  created(){
    this.$store.dispatch('options/loadTokens');
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.app{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
