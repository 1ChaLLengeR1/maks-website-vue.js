<template>
  <li class="navigation__item" :class="{ navigation__item__panel: this.panel }">
    <router-link :to="{ name: `${name}` }">{{ nazwa }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["name", "nazwa", "panel"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navigation__item {
  text-align: center;
  a {
    width: 100%;
    display: block;
    font-size: 25px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: white;
    text-decoration: none;
    transition: 0.5s;
  }
  a:hover {
    color: #ba181b;
  }
  a.router-link-active {
    color: #ba181b;
  }
}

.navigation__item__panel {
  width: 100%;
  padding: 0.5rem;

  a {
    color: #ba181b;
    border-radius: 8px;
    background-color: #212529;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
  }
  a:hover {
    color: white;
  }
  a.router-link-active {
    color: white;
  }
}
</style>
