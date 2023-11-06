<template>
  <div class="container">
    <form>
      <h4>Zaloguj się</h4>
      <q-input standout v-model="login" label="Login" color="white" />
      <q-input
        standout
        v-model="password"
        label="Password"
        color="white"
        type="password"
      />
      <p>{{ this.information }}</p>
      <q-btn
        color="black"
        label="Wyślij"
        :disabled="checkInput"
        @click="submit"
      />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      information: "",
    };
  },
  methods: {
    async submit() {
      if (this.login === "" || this.password === "") {
        return;
      }

      this.$store.commit("options/loadingSpinner", true);
      try {
        const response = await fetch("https://projekt1.server.arturscibor.pl/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login: this.login, password: this.password }),
        });
        const responseData = await response.json();
        if (!response.ok) {
          this.information = responseData.error;
        } else {
          this.$store.dispatch("options/setLogin", {
            accesToken: responseData.accesToken,
            refreshToken: responseData.refreshToken,
          });
          this.$router.push("/options-panel/aboutme");
        }
      } catch (error) {
        this.information = "Problem z serwerm, spróbuj później";
      }
      this.$store.commit("options/loadingSpinner", false);

      this.login = "";
      this.password = "";
      this.resetInformation();
    },
    resetInformation() {
      setTimeout(() => {
        this.information = "";
      }, 5000);
    },
  },
  computed: {
    checkInput() {
      if (this.login === "" || this.password === "") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 100%;
  min-height: 18rem;
  background-color: white;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
  border-radius: 8px;
  @media (min-width: 750px) {
    min-width: 20rem;
    min-height: 18rem;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    h4 {
      margin: 0;
      text-align: center;
      font-family: sans-serif;
    }
    p {
      margin: 0;
      text-align: center;
      color: red;
      font-family: sans-serif;
    }
  }
}
</style>
