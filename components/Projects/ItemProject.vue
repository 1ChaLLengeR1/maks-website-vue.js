<template>
  <li>
    <div class="box_image">
      <img :src="link" alt="phpto_project" />
    </div>
    <div class="box_information">
      <h3>{{ name }}</h3>
      <h5>{{ short_description }}</h5>
      <q-btn
        style="background: #161a1d; color: #ba181b"
        rounded
        label="Zobacz projekt!"
        @click="SingleProject(id)"
      />
    </div>
  </li>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["id", "name", "link", "short_description"],
  setup() {
    const router = useRouter()
    const SingleProject = (id) => {
      router.push({
        name: 'single-project',
        params:{
          id: id
        }
      })
    };

    return { SingleProject };
  },
};
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  height: 25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
  transition: 0.2s ease-in;
  border-bottom: 1px solid #ba181b;

  .box_information {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    text-align: center;

    h3 {
      font-size: 35px;
    }
    h5 {
      font-size: 15px;
    }

    h3,
    h5 {
      margin: 0;
      padding: 0;
    }
  }

  .box_image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      padding: 0.5rem;
      opacity: 0.4;
    }
  }
}
li:hover {
  transform: scale(1.05);
}

@media (min-width: 770px) {
  li {
    width: 22rem;
    height: 30rem;
  }
}
</style>
