<template>
  <div class="main__options">
    <div v-if="this.onDialog">
      <p>Polski</p>
    </div>
    <textarea v-model="polish" v-if="this.onDialog" rows="auto"></textarea>
    <div v-if="this.onDialog">
      <p>Angielski</p>
    </div>
    <textarea v-model="english" v-if="this.onDialog" rows="auto"></textarea>
    <q-btn
      label="Zapisz"
      class="button"
      @click.prevent="editAboutMe"
      v-if="this.onDialog"
    />
    <the-dialog v-if="!this.onDialog" :information="this.info"></the-dialog>
  </div>
</template>

<script>
import DialogBox from "../../components/category/DialogBox.vue";
export default {
  components: {
    "the-dialog": DialogBox,
  },
  data() {
    return {
      polish: "",
      english: "",
      onDialog: true,
      info: null,
    };
  },
  methods: {
    async editAboutMe() {
      const item = this.$store.getters["adminPanel/loadAboutMe"];
      const array = [
        {
          id: item[0].id,
          information: this.polish,
        },
        {
          id: item[1].id,
          information: this.english,
        },
      ];
      const response = await fetch(
        "https://projekt1.server.arturscibor.pl/AboutMeEdit",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${this.$store.getters["options/saveTokens"].accesToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(array),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const obj = {
          off: true,
          information: responseData.error,
          bgcolor: true,
        };
        this.$store.commit("adminPanel/confirmedPopuedBox", obj);
        return;
      }
      const obj = {
        off: true,
        information: responseData.succes,
        bgcolor: false,
      };
      this.$store.commit("adminPanel/confirmedPopuedBox", obj);
      await this.$store.dispatch("adminPanel/loadDataBaseAboutMe");
      this.informationAboutMe();
    },
    informationAboutMe() {
      const item = this.$store.getters["adminPanel/loadAboutMe"];
      this.polish = item[0].information;
      this.english = item[1].information;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("adminPanel/loadDataBaseAboutMe");
      this.informationAboutMe();
      this.onDialog = true;
    } catch (e) {
      this.onDialog = false;
      const error = this.$store.getters["adminPanel/loadErrors"];
      this.info = error.error || "Brak odpowiedzi z serwera, spróbuj później!";
    }
  },
};
</script>
<style lang="scss" scoped>
.main__options {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  textarea {
    width: 100%;
    min-height: 15rem;
    padding: 12px 5px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 0;
    @media (min-width: 750px) {
      font-size: 1.3rem;
    }
  }

  .button {
     width: 100%;
    background: #212529;
    color: green;
  }
}
</style>
