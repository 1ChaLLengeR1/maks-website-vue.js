<template>
  <div class="main__container">
    <login-panel></login-panel>
  </div>
</template>

<script>
import LoginPanel from "../components/LoginPanel/ContainerLogin.vue";
import { checkTokens } from '../functions/checkTokens'
export default {
  components: {
    "login-panel": LoginPanel,
  },
  data() {
    return {};
  },
  methods: {
    valideTokens() {
      const valid = checkTokens();
      if(!valid){
        return;
      }
      this.$router.push("/options-panel/aboutme");
    },
  },
  created() {
    this.valideTokens();
  },
};
</script>

<style lang="scss" scoped>
.main__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  background-color: #161a1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
</style>
