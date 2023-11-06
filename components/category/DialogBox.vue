<template>
  <div class="dialog__container">
    <div class="box">
      <div class="title">
        <p>Błąd z Strony Serwera!</p>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
          />
        </svg>
      </div>
      <div class="main__info">
        <p>{{ information }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["information"],
};
</script>
<style lang="scss" scoped>
.dialog__container {
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  .box {
    width: 100%;
    height: 25rem;
    border-radius: 8px;
    background-color: #161a1d;
    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);
    @media (min-width: 750px) {
      width: 45rem;
      height: 25rem;
    }
    .title {
      width: 100%;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon {
      width: 100%;
      height: 11rem;
      svg {
        width: 100%;
        height: 100%;
        fill: red;
      }
    }
    .main__info {
      width: 100%;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0.5rem;
    }
    p {
      margin: 0;
      color: white;
      font-size: 1.2rem;
      @media (min-width: 750px){
        font-size: 2rem;
      }
    }
  }
}
</style>
