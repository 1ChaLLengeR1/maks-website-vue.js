<template>
    <div class="information__container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
        <p>{{info}}</p>
    </div>
</template>
<script>
    export default{
        props:['info']
    }
</script>
<style lang="scss" scoped>
    .information__container{
        width: 100%;
        height: 17rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem;
        svg{
            width: 5rem;
            height: 5rem;
            fill: orange;
        }
        p{
            text-align: center;
            font-weight: bold;
            font-family: sans-serif;
            font-size: 1.2rem;
            padding: 0.5rem;
            margin: 0;
        }
    }
</style>