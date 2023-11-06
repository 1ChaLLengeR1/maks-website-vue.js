<template>
  <form class="buttons__container">
    <q-btn color="green" label="Tak" class="button" @click.privent="submit" />
    <q-btn color="red" label="Nie" class="button" @click="offConfirmed" />
  </form>
</template>
<script>
export default {
  props: ["link", "method", "body", "loadDataBase", "params"],
  methods: {
    async submit() {
      const response = await fetch(`https://projekt1.server.arturscibor.pl/${this.link}`, {
        method: this.method,
        headers: {
          authorization: `Bearer ${this.$store.getters["options/saveTokens"].accesToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.body),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const obj = {
          off: true,
          information: responseData.error,
          bgcolor: true,
        };
        this.$store.commit("adminPanel/confirmedPopuedBox", obj);
        this.offConfirmed();
        return;
      }
      const obj = {
        off: true,
        information: responseData.succes,
        bgcolor: false,
      };
      this.$store.commit("adminPanel/confirmedPopuedBox", obj);
      await this.$store.dispatch(
        `adminPanel/${this.loadDataBase}`,
        this.params
      );
      this.offConfirmed();
    },
    offConfirmed() {
      const obj = {
        off: false,
        title: null,
        fetchApi: {
          link: null,
          method: null,
          id: null,
        },
        loadDataBase: null,
        params: null,
      };
      this.$store.commit("adminPanel/confirmdOptions", obj);
    },
  },
};
</script>
<style lang="scss" scoped>
.buttons__container {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  @media (min-width: 750px) {
    justify-content: flex-end;
  }
  .button {
    width: 6rem;
  }
}
</style>
