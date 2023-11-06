<template>
    <div class="main__contact">
        <container-log v-if="showLog" @off-log="offLog" :info="this.infoLog" :error="this.error"></container-log>
       <container-information></container-information> 
      <container-mailer @information-log="informationLog"></container-mailer>
    </div>
</template>
<script>
import ContainerInformation from './ContainerInformaction.vue'
import ContainerMailer from './ContainerMailer.vue'
import ContainerLog from './ContainerLog.vue'
    export default{
        components:{
            'container-information': ContainerInformation,
            'container-mailer': ContainerMailer,
            'container-log': ContainerLog
        },
        data(){
            return{
                showLog: false,
                infoLog: '',
                error: false
            }
        },
        methods:{
            offLog(val){
                this.showLog = val;
            },
            informationLog(val){
                this.showLog = val.active;
                this.infoLog = val.info
                this.error = val.error
                this.offContainerLog();
            },
            offContainerLog(){
                setTimeout(()=>{
                    this.showLog = false
                },5000)
            }
        }
    }
</script>
<style lang="scss" scoped>
.main__contact{
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: 750px) {
        min-height: calc(100vh - 21.4rem);
        flex-direction: row;
      }
}
</style>
