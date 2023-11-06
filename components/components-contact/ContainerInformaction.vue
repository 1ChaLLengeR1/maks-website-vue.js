<template>
  <section class="sesction__information">
    <ul>
      <container-item name="Adres" infomration="Dobczyce">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384  512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
      </container-item>
      <container-item name="Telefon" infomration="530-773-833">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          />
        </svg>
      </container-item>
      <container-item name="E-Mail" infomration="aqend3sign@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"
          />
        </svg>
      </container-item>
    </ul>
  </section>
</template>
<script>
import ContaionerItem from "./ContainerItem.vue";
export default {
  components: {
    "container-item": ContaionerItem,
  },
};
</script>

<style lang="scss" scoped>
.sesction__information {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  @media (min-width: 750px) {
    width: 50%;
  }
  ul {
    width: 100%;
    min-height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    list-style: none;
    @media (min-width: 750px) {
      width: 100%;
      padding: 0.5rem;
    }
    svg {
      width: 2.2rem;
      height: 2.2rem;
      padding: 0.3rem;
      fill: white;
      @media (min-width: 750px) {
        width: 4rem;
        height: 4rem;
        padding: 0.8rem;
      }
    }
  }
}
</style>
