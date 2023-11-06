<template>
  <div class="main__container">
    <contact-panel></contact-panel>
  </div>
</template>
<script>
import ContactPanel from "../components/components-contact/ContactPanel.vue";
export default {
  components: {
    "contact-panel": ContactPanel,
  },
};
</script>

<style lang="scss" scoped>
.main__container {
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #161a1d;
}
</style>
