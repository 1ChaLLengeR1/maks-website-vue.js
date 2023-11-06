<template>
  <section class="box__information">
    <p class="welcome__page">Cześć! Witaj na mojej stronie</p>
    <h2>Hej! Nazywam się Maks</h2>
    <h3>i jestem <span>Grafikiem Komputerowym</span>.</h3>
    <div class="box__description">
      <p v-if="!item_language">{{ polish || item_error }}</p>
      <p v-else>{{ english || item_error }}</p>
      <q-btn
        style="background: #ba181b; color: white; width: max-content"
        label="Change Launguage"
        @click="changeLanguage"
      />
    </div>
    <the-links></the-links>
  </section>
</template>

<script>
import Links from "../components-home/Links.vue";
import { ref } from "vue";
export default {
  props: ["polish", "english"],
  components: {
    "the-links": Links,
  },
  setup() {
    //values
    const item_language = ref(false);
    const item_error = ref(
      "Jeśli nie zostaną załadowane informację to odświeżanie strone!"
    );

    //functions

    const changeLanguage = () => {
      item_language.value = !item_language.value;
    };
    return { item_language, changeLanguage, item_error };
  },
};
</script>

<style lang="scss" scoped>
.box__information {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  color: white;

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  .welcome__page {
    text-align: center;
    font-size: 15px;
  }

  h2 {
    text-align: center;
    font-size: 30px;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    span {
      color: #ba181b;
    }
  }
  .box__description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    p {
      font-size: 15px;
    }
  }
}
@media (min-width: 1000px) {
  .box__information {
    gap: 2rem;
    .welcome__page {
      text-align: left;
      font-size: 25px;
    }
    h2 {
      text-align: left;
      font-size: 55px;
    }
    h3 {
      text-align: left;
      font-size: 45px;
      span {
        color: #ba181b;
      }
    }
    .box__description {
      align-items: flex-start;
      text-align: left;

      p {
        font-size: 20px;
      }
    }
  }
}
</style>
