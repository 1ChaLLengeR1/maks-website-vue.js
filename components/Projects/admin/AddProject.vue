<template>
  <form class="add__container__project" enctype="multipart/form-data">
    <div class="title__numeric">
      <q-input
        class="inputs"
        bg-color="white"
        color="black"
        filled
        label="Nazwa projektu"
        v-model="item_add.name"
      />
      <q-input
        class="inputs"
        bg-color="white"
        color="black"
        filled
        type="number"
        label="Numer projektu"
        v-model="item_add.numeric"
      />
    </div>
    <div class="short-description__descriptions">
      <q-input
        rows="10"
        class="inputs"
        filled
        bg-color="white"
        color="black"
        type="textarea"
        label="Krótki opis"
        v-model="item_add.short_description"
      />
      <q-input
        filled
        rows="10"
        class="inputs"
        bg-color="white"
        color="black"
        type="textarea"
        label="Opis"
        v-model="item_add.description"
      />
    </div>
    <div class="images">
      <q-uploader
        class="inputs"
        bg-color="white"
        color="black"
        label="Zdjęcie projektu"
        ref="uploader_image"
        @added="addImageProject"
        @removed="removeImageProject"
      />
      <q-uploader
        class="inputs"
        bg-color="white"
        color="black"
        label="Zdjęcia do projektu"
        multiple
        ref="uploader_images"
        @added="addImagesProject"
        @removed="removeImagesProject"
      />
    </div>
    <q-btn
      class="button"
      label="Dodaj projekt"
      :disable="checkInputs"
      @click.prevent="addProject"
    />
  </form>
</template>

<script>
import { reactive, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    //values
    const store = useStore();
    const uploader_image = ref(null);
    const uploader_images = ref(null);
    const item_add = reactive({
      name: "",
      short_description: "",
      description: "",
      numeric: null,
      image_project: [],
      images: [],
    });

    //functions
    const addImageProject = (image) => {
      for (const item of image) {
        item_add.image_project.push(item);
      }
    };

    const removeImageProject = (id) => {
      const findId = item_add.image_project.findIndex((p) => p.id === id._key);
      item_add.image_project.splice(findId, 1);
    };

    const addImagesProject = (image) => {
      for (const item of image) {
        item_add.images.push(item);
      }
    };

    const removeImagesProject = (id) => {
      const findId = item_add.image_project.findIndex((p) => p.id === id._key);
      item_add.images.splice(findId, 1);
    };

    const restartUploader = (uploader) => {
      uploader.value.reset();
    };

    const addProject = async () => {
      const formData = new FormData();
      formData.append("name", item_add.name);
      formData.append("short_description", item_add.short_description);
      formData.append("description", item_add.description);
      formData.append("numeric", item_add.numeric);
      formData.append("random_number", Math.random());
      formData.append("image_project", item_add.image_project);
      for (const key of item_add.image_project) {
        formData.append("image_project", key);
      }
      for (const key of item_add.images) {
        formData.append("images", key);
      }

      const url = "https://projekt1.server.arturscibor.pl/routers/projects/add_project";
      const method = "POST";
      const headers = {
        authorization: `Bearer ${store.getters["options/saveTokens"].accesToken}`,
      };

      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        const obj = {
          off: true,
          information: responseData.error,
          bgcolor: true,
        };
        store.commit("adminPanel/confirmedPopuedBox", obj);
        return;
      }
      const obj = {
        off: true,
        information: responseData.succes,
        bgcolor: false,
      };
      store.commit("adminPanel/confirmedPopuedBox", obj);
      item_add.name = "";
      item_add.short_description = "";
      item_add.description = "";
      item_add.numeric = null;
      item_add.image_project = [];
      item_add.images = [];
      restartUploader(uploader_image);
      restartUploader(uploader_images);
    };

    const checkInputs = computed(() => {
      if (
        item_add.name === "" ||
        item_add.short_description === "" ||
        item_add.description === "" ||
        item_add.numeric === null ||
        item_add.image_project.length === 0 ||
        item_add.images.length === 0
      ) {
        return true;
      }
      return false;
    });
    return {
      addProject,
      item_add,
      addImageProject,
      removeImageProject,
      addImagesProject,
      removeImagesProject,
      restartUploader,
      uploader_image,
      uploader_images,
      checkInputs,
    };
  },
};
</script>

<style lang="scss" scoped>
.add__container__project {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .title__numeric {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .short-description__descriptions {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .images {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .inputs {
    width: 100%;
  }
  .button {
    width: 100%;
    background: #212529;
    color: green;
  }
}
@media (min-width: 750px) {
  .add__container__project {
    .title__numeric {
      flex-direction: row;
    }
    .short-description__descriptions {
      flex-direction: row;
    }
    .images {
      flex-direction: row;
    }
  }
}
</style>
