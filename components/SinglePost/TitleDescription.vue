<template>
  <div class="information__container">
    <h2>{{ name }}</h2>
    <h5>{{ description }}</h5>
  </div>
</template>

<script>
export default {
  props: ["name", "description"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.information__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  color: white;

  h2, h5{
    padding: 0;
    margin: 0;
  }
  h2{
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
  h5{
    font-size: 15px;
  }
}
@media (min-width: 770px){
    .information__container{
        gap: 3rem;
        padding-top: 5rem;
        h2{
            font-size: 50px;
          }
          h5{
            font-size: 18px;
          }  
    }
}
</style>
