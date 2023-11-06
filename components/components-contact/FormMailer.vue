<template>
  <section>
    <form>
      <q-input
        v-model="inputName"
        label="Imie"
        class="input"
        color="white"
        label-color="white"
        dark
      />
      <q-input
        v-model="inputMail"
        label="E-Mail"
        class="input"
        color="white"
        dark
        label-color="white"
      />
      <textarea
        placeholder="Napisz swoją wiadomość... (Minimum 10 znaków!)"
        v-model="textAreaInput"
      ></textarea>
      <q-btn
        color="black"
        label="Wyślij"
        :disabled="checkMailer"
        @click.prevent="submitMail"  
      />
    </form>
  </section>
</template>

<script>
export default {
  emits:['information-log'],
  data() {
    return {
      inputName: "",
      inputMail: "",
      textAreaInput: "",
    };
  },
  methods: {
    async submitMail() {
      const obj = {
        name: this.inputName,
        mail: this.inputMail,
        text: this.textAreaInput,
      };
      this.$emit('information-log', {active: true, info:'', error:false})
      try {
        const response = await fetch("https://projekt1.server.arturscibor.pl/mailer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const responseData = await response.json()
        if (response.ok) {
          this.$emit('information-log', {active: true, info:responseData.success, error:false})
        }else{
           this.$emit('information-log', {active: true, info:responseData.error, error:true})
        }
      } catch (e) {
        this.$emit('information-log', {active: true, info:'Błąd, proszę spróbować później!', error:true})
      }

      this.inputName = "";
      this.inputMail = "";
      this.textAreaInput = "";
    },
  },
  computed: {
    checkMailer() {
      if (
        this.inputName === "" ||
        this.inputMail === "" ||
        this.textAreaInput.length < 10
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 1rem;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .input {
      font-family: sans-serif;
    }
    textarea {
      height: 8rem;
      padding: 12px 5px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      font-size: 16px;
      resize: none;
    }
  }
}
</style>
