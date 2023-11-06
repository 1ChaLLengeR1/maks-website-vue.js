<template>
  <main class="main__popued">
    <div :class="{ 'error': this.bgcolor }">
      <p>{{ this.information }}</p>
      <svg @click="offPoputed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return { 
      information: null,
      bgcolor: null,
    };
  },
  methods: {
    options() {
      const item = this.$store.getters["adminPanel/confirmedPopuedBox"];
      this.information = item.information;
      this.bgcolor = item.bgcolor;
    },
    offPoputed() {
      const obj = {
        off: null,
        information: null,
        bgcolor: null,
      };
      this.$store.commit("adminPanel/confirmedPopuedBox", obj);
    },
  },
  mounted() {
    this.options();
    setTimeout(()=>{
        this.offPoputed()
    },5000)
  },
};
</script>

<style lang="scss" scoped>
.main__popued {
  width: 100%;
  height: 5rem;
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  padding: 0.5rem;
  div {
    width: 20rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 0.3rem;
    background-color: green;
    p {
      width: 90%;
      text-align: center;
      margin: 0;
      color: white;
      font-family: sans-serif;
      font-weight: bold;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
      fill: white;
      border-radius: 50%;
    }
  }
  .error {
    background-color: red;
  }
}
</style>
