<template>
  <li>
    <section class="icon">
      <div>
        <slot></slot>
      </div>
    </section>
    <section class="inforamtion">
        <p class="paragraf__name">{{name}}</p>
        <p class="paragraf__info">{{infomration}}</p>
    </section>
  </li>
</template>

<script>
export default {
    props:['name', 'infomration']
};
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  background-color: #161a1d;
  box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);
  border-radius: 16px;
  @media (min-width:325px){
    width: 75%;
  }
  @media (min-width: 1200px){
    width: 60%;
  }
  
  .icon {
    width: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    @media (min-width:750px){
      padding: 0.2rem;
    }
    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .inforamtion {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    .paragraf__name{
        margin: 0;
        font-size: 1.2rem;
        color: white;
        @media (min-width:750px){
            font-size: 1.8rem;
        }
    }
    .paragraf__info{
        margin: 0;
        font-size: 0.9rem;
        color: white;
        @media (min-width:750px){
            font-size: 1rem;
            letter-spacing: 0.1rem;
        }
    }
  }
}
</style>
