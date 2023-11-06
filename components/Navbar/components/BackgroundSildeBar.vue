<template>
  <div @click="offBackground"></div>
</template>

<script>
export default {
  emit: ["off-Background"],
  data() {
    return {};
  },
  methods: {
    offBackground() {
      this.$emit("off-Background", false);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background: rgba(38, 38, 38, 0.9);
}
</style>
