<template>
    <section>
        <h2>{{name}}</h2>
    </section>
</template>

<script>
    export default{
        props:['name']
    }
</script>

<style lang="scss" scoped>
    section{
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        padding: 1rem;
     h2{
        margin: 0;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: sans-serif;
        @media (min-width:750px){
            font-size: 2.5rem;
        }
        @media (min-width: 1100px){
            font-size: 3.5rem;
        }
     }   
    }
</style>
