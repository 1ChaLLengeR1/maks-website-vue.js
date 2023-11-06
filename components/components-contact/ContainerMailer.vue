<template>
    <section class="sesction__mailer">
        <div class="mailer">
            <title-mailer name="Wyślij Wiadomość"></title-mailer>
            <form-mailer @information-log="informationLog"></form-mailer>
        </div>
    </section>
</template>

<script>
import TitleMailer from './TitleMailer.vue'
import FormMailer from './FormMailer.vue'
    export default{
        emits:['information-log'],
        components:{
            'title-mailer':TitleMailer,
            'form-mailer': FormMailer,
        },
        methods:{
            informationLog(val){
                this.$emit('information-log', val);
            }
        }
    }
</script>

<style lang="scss" scoped>
.sesction__mailer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    @media (min-width:750px){
        width: 50%;
        padding: 1rem;
    }
    .mailer{
        width: 100%;
        min-height: 80%;
        display: flex;
        flex-direction: column;
        background-color: #161a1d;
        box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);
        border-radius: 8px;
        @media (min-width:750px){
            width: 70%;
        }
    }
  }
</style>
