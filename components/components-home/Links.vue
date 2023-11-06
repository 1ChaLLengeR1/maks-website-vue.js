<template>
    <div>
        <section class="social__meida">
            <ul>
                <item-link name="Facebook" icon="facebook" link="https://www.facebook.com/profile.php?id=100068718950337">
                    <svg class="iconLinks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </item-link>
                <item-link name="Instagram" icon="instagram" link="https://www.instagram.com/aqen_n/">
                    <svg class="iconLinks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </item-link>
                <item-link name="Redbubble" icon="redbubble" link="https://www.redbubble.com/people/AqenDesign/shop">
                    <svg
                    class="iconLinks"
                    style="color: #ba181b"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M22.177 21.766h-4.266c-0.234 0-0.427-0.193-0.427-0.427v-10.708c0-0.234 0.193-0.427 0.427-0.427h3.953c2.969 0 3.594 1.75 3.594 3.214 0 0.849-0.224 1.521-0.672 2.016 1.089 0.448 1.672 1.458 1.672 2.922 0 2.135-1.599 3.411-4.281 3.411zM15.984 21.766h-8.859c-0.234 0-0.427-0.193-0.427-0.427v-10.708c0-0.234 0.193-0.427 0.427-0.427h4.141c2.583 0 4.125 1.391 4.125 3.724 0 1.552-0.776 2.771-2.036 3.266l2.948 3.859c0.24 0.276 0.047 0.708-0.318 0.714zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16z"
                    ></path>
                  </svg>
                </item-link>
            </ul>
        </section>
    </div>
</template>

<script>
import ItemLink from './ItemLink.vue'
    export default{
        components:{
            'item-link':ItemLink
        },
        emits:['social-media'],
        methods:{
            showSoclaMedia(){
                this.$emit('social-media', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        @media (min-width:750px){
            flex-direction: row;
        }
        .social__meida{
            width: 100%;
            @media (min-width:750px){
                width: 100%;
            }
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
                list-style: none;
                margin: 0;
                padding: 0;
                @media (min-width: 750px){
                    justify-content: flex-start;
                }
            }
            .iconLinks{
                width: 2rem;
                fill: #ba181b;
               
            }
        }
    }
</style>