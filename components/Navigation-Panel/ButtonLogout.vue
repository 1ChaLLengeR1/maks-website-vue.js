<template>
    <div>
        <q-btn label="Wyloguj się" class="button"  @click="logout"/>
    </div>
</template>

<script>
 export default{
    emit:['log-out'],
   methods:{
    logout(){
        this.$emit('log-out');
        this.$store.dispatch('options/setLogout');
        this.$router.push("/");
    }
   }
 }
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        .button{
            width: 100%;
            background-color: #212529;
            border-radius: 8px;
            font-size: 14px;
            color: white;
        }
    }
</style>