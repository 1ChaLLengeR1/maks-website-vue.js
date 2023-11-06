<template>
  <main>
    <div class="main__box">
      <h1>404</h1>
      <div class="box__info">
        <p>Opps! Strona nie została odnaleziona</p>
      </div>
      <div class="box__paragraf">
        <p>
          Strona, której szukasz jest niedostępna. Może popełniłeś błąd wpisaniu
          adresu. Sprówbuj ponownie, lub wróci do głównej strony za pomocą
          guzika!
        </p>
      </div>
      <q-btn
        rounded
        style="background-color: #161a1d; color: white;"
        label="Wróć do strony głównej"
        class="button"
        @click="backToMainPage"
      />
    </div>
  </main>
</template>

<script>
export default {
    methods:{
        backToMainPage(){
            this.$router.push('/about-me')
        }
    }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #161a1d;
  .main__box {
    min-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 0px 0px 24px 0px rgba(10, 10, 10, 1);
    background-image: url("../images/p404.png");
    @media (min-width: 750px) {
      min-width: 80%;
      height: 80%;
    }
    h1 {
      margin: 0;
      font-size: 7rem;
      font-weight: bold;
      color: white;
      @media (min-width: 750px) {
        font-size: 20rem;
        margin: 5rem;
      }
    }
    .box__info {
      width: 95%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      @media (min-width: 750px) {
        width: 25rem;
        height: 3rem;
      }
      p {
        margin: 0;
        font-size: 0.8rem;
        font-weight: bold;
        @media (min-width: 750px) {
          font-size: 1.2rem;
        }
      }
    }
    .box__paragraf {
      width: 100%;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      @media (min-width: 750px) {
        width: 80%;
        height: 5rem;
      }
      p {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        @media (min-width: 750px) {
          font-size: 1.3rem;
        }
      }
    }
    .button{
        width: 100%;
        height: 3rem;
        font-size: 15px;
        @media(min-width: 750px){
            width: 20rem;
            height: 3rem;
        }
    }
  }
}
</style>
