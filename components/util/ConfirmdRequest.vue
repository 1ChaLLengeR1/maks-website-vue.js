<template>
  <div class="confirmd__container">
    <div class="box__dialog">
      <the-title></the-title>
      <the-information :info="this.title"></the-information>
      <the-buttons :link="this.link" :method="this.method" :body="this.body" :loadDataBase="this.loadDataBase" :params="this.params"></the-buttons>
    </div>
  </div>
</template>
<script>
import Title from "../ConfirmdRequest/Title.vue";
import Information from "../ConfirmdRequest/Information.vue";
import Buttons from "../ConfirmdRequest/Buttons.vue";
export default {
  components: {
    "the-title": Title,
    "the-information": Information,
    "the-buttons": Buttons,
  },
  data() {
    return {
      title: null,
      link: null,
      method:null,
      body: {},
      loadDataBase: null,
      params: null
    };
  },
  methods: {
    confirmdInformation() {
      const confirmdItem = this.$store.getters["adminPanel/confirmdOptions"];
      this.title = confirmdItem.title;
      this.link = confirmdItem.fetchApi.link;
      this.method = confirmdItem.fetchApi.method;
      this.body = confirmdItem.fetchApi.body;
      this.loadDataBase = confirmdItem.loadDataBase
      this.params = confirmdItem.params
    },
  },
  mounted() {
    this.confirmdInformation();
  },
};
</script>
<style lang="scss" scoped>
.confirmd__container {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  top: 0;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  .box__dialog {
    width: 30rem;
    height: 25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  }
}
</style>
