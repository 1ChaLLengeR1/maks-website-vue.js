<template>
  <section class="box__image">
    <img src="../../images/aqen_zdjecie.png" alt="photo_portfolio" />
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box__image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    max-width: 80%;
    max-height: 80%;
    box-shadow: 0px 0px 20px 5px rgba(11, 9, 10, 1);

    @media (min-width: 750px){
      border-bottom-left-radius: 50%;
      box-shadow: 25px 25px 5px 0px rgba(11, 9, 10, 1);
    }
  }
}
</style>
