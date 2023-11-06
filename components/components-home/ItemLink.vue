<template>
  <li>
    <button :class="iconClass" @click="submitPage">
      <slot></slot>
      <q-separator vertical inset color="red" />
      {{ name }}
    </button>
  </li>
</template>
<script>
export default {
  props: ["name", "icon", 'link'],
  methods: {
    submitPage() {
      window.location.href = `${this.link}`;
    },
  },
  computed: {
    iconClass() {
      if (this.icon === "facebook") {
        return { facebook: this.icon === "facebook" };
      } else if (this.icon === "instagram") {
        return { instagram: this.icon === "instagram" };
      } else {
        return { redbubble: this.icon === "redbubble" };
      }
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  width: 12rem;
  height: 4rem;
  display: flex;
  align-items: center;

  button {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #ba181b;
    font-size: 20px;
    font-weight: 500;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: 0.5s ease-in-out;
    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);
  }
  button:hover{
    transform: scale(110%);
  }
  .facebook {
    background: #161a1d;
    border-left: 1px solid #161a1d;
  }
  .instagram {
    background: #161a1d;
    border-left: 1px solid #161a1d;
  }
  .redbubble {
    background: #161a1d;
    border-left: 1px solid #161a1d;
  }
}
</style>
