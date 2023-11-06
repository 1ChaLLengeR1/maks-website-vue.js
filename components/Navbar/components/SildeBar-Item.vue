<template>
    <li>
        <router-link :to="{name:`${name}`}" @click="offBacground">{{nazwa}}</router-link>
    </li>
</template>

<script>
    export default{
        props: ['name', 'nazwa'],
        emit:['off-background-item'],
        data(){
            return{
                navbarBackground: false
            }
        },
        methods:{
            offBacground(){
                this.$emit('off-background-item', this.navbarBackground)
            }
        }
    }
</script>

<style lang="scss" scoped>
    li{
        width: 100%;
        text-align: center;
    }
    a {
        width: 100%;
        display: block;
        font-size: 25px;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        color: white;
        text-decoration: none;
        transition: 0.5s;
      }
      a:hover {
        color: #ba181b;
      }
      a.router-link-active {
        color: #ba181b;
      }
</style>