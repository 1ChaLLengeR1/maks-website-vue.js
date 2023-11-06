<template>
    <main>
        <div class="spinner">
            <div></div>
            <div></div>
        </div> 
    </main>
</template>
<script>
 export default{
    data(){
        return{

        }
    }
 }
</script>

<style lang="scss" scoped>
    main{
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(38, 38, 38, 0.9);
        .spinner{
            width: 5rem;
            height: 5rem;
            position: relative;
            @media (min-width: 750px){
                width: 10rem;
                height: 10rem;
            }
        }
        .spinner div{
            width: 100%;
            height: 100%;
            position: absolute;
            border: 8px solid transparent;
            border-top-color: black;
            box-sizing: border-box;
            border-radius: 50%;
            animation: spinnerOne 1.2s linear infinite;
        }
        .spinner div:nth-child(2){
            border: 8px solid transparent;
            border-bottom-color: black;
            animation: spinnerTwo 1.2s linear infinite;
        }

        @keyframes spinnerOne{
            0%{
                transform:  rotate(0deg);
                border-width: 10px;
            }
            50%{
                transform:  rotate(180deg);
                border-width: 1px;
            }
            100%{
                transform:  rotate(360deg);
                border-width: 10px;
            }
        }

        @keyframes spinnerTwo{
            0%{
                transform:  rotate(0deg);
                border-width: 1px;
            }
            50%{
                transform:  rotate(180deg);
                border-width: 10px;
            }
            100%{
                transform:  rotate(360deg);
                border-width: 1px;
            }
        }
    }
</style>
