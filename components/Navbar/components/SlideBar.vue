<template>
    <div> 
        <img src="../../../images/logo1.png" alt="logo" />
        <ul>
            <slidebar-item name="home" nazwa="O mnie" @off-background-item="offBacground"></slidebar-item>
            <slidebar-item name="projects" nazwa="Galeria projektów" @off-background-item="offBacground"></slidebar-item>
            <slidebar-item name="contact" nazwa="Kontakt" @off-background-item="offBacground"></slidebar-item>
        </ul>
    </div>
</template>

<script>
    import SlideBarItem from './SildeBar-Item.vue'
    export default{
        components:{
            'slidebar-item':SlideBarItem,
        },
        emit:['off-background'],
        data(){
            return{

            }
        },
        methods:{
            offBacground(val){
                this.$emit('off-background', val)
            }
        }
    }
</script> 

<style lang="scss" scoped>
    div{
        width: 14.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        left:0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(38, 38, 38, 1);
        img{
            width: 15rem;
            padding: 0.5rem;
        }
        h3{
            margin: 0;
            padding: 0.5rem;
        }
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem;
            list-style: none;
        }
    }
</style>
