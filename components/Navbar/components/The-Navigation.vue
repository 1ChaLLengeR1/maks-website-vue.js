<template>
  <div>
    <ul v-if="mobile">
      <navigation-item name="home" nazwa="O mnie"></navigation-item>
      <navigation-item name="projects" nazwa="Galeria projektów"></navigation-item>
      <navigation-item name="contact" nazwa="Kontakt"></navigation-item>
    </ul>
    <toggle-button v-else @value-toogle-button="valueToogleButton" :valueButton="this.valueButton"></toggle-button>
  </div>
</template>

<script>
import NaviagtionItem from "./Navigation-Item.vue";
import ToggleButton from './Toggle-Button.vue'
export default {
  components: {
    "navigation-item": NaviagtionItem,
    "toggle-button":ToggleButton
  },
  emits:['toogle-button-value'],
  props:['valueButton'],
  data() {
    return {
      mobile: true,
      slideBar:false,
    };
  },
  methods:{
    checkScreenwidth(){
      if(window.innerWidth >= 750){
        this.mobile = true;
        return;
      }else{
        this.mobile = false
      }
    },
    valueToogleButton(val){
      this.$emit('toogle-button-value', val);
    }
  },
  created(){
    window.addEventListener('resize', this.checkScreenwidth)
    this.checkScreenwidth()
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding-right: 2rem;
  }
}
</style>
