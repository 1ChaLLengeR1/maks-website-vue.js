<template>
    <section>
        <div class="container__log" :class="{'error': this.error}">
            <div class="info">
                <p v-if="checkString">{{this.info}}</p>
                <h2 v-else data-text="Wysyłanie...">Wysyłanie...</h2>
                <svg @click="offLog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg> 
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        props:['info', 'error'],
        emits:['off-log'],
        methods:{
            offLog(){
                this.$emit('off-log', false)
            },
        },
        computed:{
            checkString(){
                if(this.info===''){
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    section{
        width:100%;
        height: 100%;
        position: absolute;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 0.5rem;
        .container__log{
            width: 20rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 8px;
            box-shadow: 0px 0px 24px 0px rgb(24, 25, 26);
            background-color: #33cc33;
            @media (min-width: 750px){
                width: 40rem;
            }
        }
        .error{
            background-color: red;
        }
        .info{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0.3rem;
            svg{
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                fill: white;
                border-radius: 8px;
                background-color: black;
                @media (min-width: 750px){
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }
            p{
                font-family: sans-serif;
                font-size: 1rem;
                color: white;
                margin: 0;
                text-align: center;
                @media (min-width:750px){
                    font-size: 1.5rem;
                }
            }
            h2{
                padding: 0;
                margin: 0;
                position: relative;
                font-size: 1.5rem;
                color: #252839; 
               text-transform: uppercase;
                -webkit-text-stroke: 0.1vw #383d52;
                @media (min-width: 750px){
                    font-size: 3rem;
                }
            }
            h2::before{
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                color: white;
                -webkit-text-stroke: 0vw #383d52;
                overflow: hidden;
                animation: napis 6s linear infinite;

            }
            @keyframes napis{
                0%,10%,100%
                {
                    width: 0;
                }
                70%,90%{
                    width: 100%;
                }
            }
        }
    }
    
</style>