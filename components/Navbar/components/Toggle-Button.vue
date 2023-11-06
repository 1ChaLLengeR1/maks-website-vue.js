<template>
    <section>
        <div @click="mobile_mavbar">
        <svg :class="{'active': this.valueButton}" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    </div>
      </section>

      
</template>

<script>
    export default{
        props:['valueButton'],
        data(){
            return{
                toggleButtonAnimation: false
            }
        },
        methods:{
            mobile_mavbar(){
                this.toggleButtonAnimation = this.valueButton
                this.toggleButtonAnimation = !this.toggleButtonAnimation
                this.$emit('value-toogle-button', this.toggleButtonAnimation)
            },
        },
    }
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;
    div{
        line-height: 0;
        svg{
            width: 2rem;
            height: 2rem;
            fill: white;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.5s ease-in-out;
        }
        .active{
              transform: rotate(180deg);
        } 
    }
  }
 
</style>
