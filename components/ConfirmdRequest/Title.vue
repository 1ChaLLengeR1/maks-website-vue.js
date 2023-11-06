<template>
  <div class="title">
    <p>Potwierdzenie!</p>
    <svg @click="offConfirmd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  methods: {
    offConfirmd() {
      const obj = {
        off: false,
        title: null,
        fetchApi: {
          link: null,
          id: null,
        },
      };
      this.$store.commit('adminPanel/confirmdOptions', obj)
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px 8px 0 0;
  background-color: orange;
  p {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0;
  }
  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
}
</style>
