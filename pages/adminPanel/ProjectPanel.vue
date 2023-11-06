<template>
    <div class="main__container__project-panel">
        <h4>Dodaj projekt</h4>
        <add-project></add-project>
    </div>
</template>

<script>
import AddProject from '../../components/Projects/admin/AddProject.vue';
export default {
    components:{
        'add-project':AddProject
    },  
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .main__container__project-panel{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        gap: 1rem;
        h4{
            width: 100%;
            margin: 0;
            text-align: left;
            color: white;
        }
    }
</style>