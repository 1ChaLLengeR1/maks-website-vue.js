<template>
  <form class="edit-project__container">
    <div class="title__numeric">
      <q-input
        class="inputs"
        bg-color="white"
        color="black"
        filled
        label="Nazwa projektu"
        v-model="item_project.name"
      />
      <q-input
        class="inputs"
        bg-color="white"
        color="black"
        filled
        type="number"
        label="Numer projektu"
        v-model="item_project.numeric"
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
        v-model="item_project.short_description"
      />
      <q-input
        filled
        rows="10"
        class="inputs"
        bg-color="white"
        color="black"
        type="textarea"
        label="Opis"
        v-model="item_project.description"
      />
    </div>
    <div class="upload-image_project">
      <q-uploader
        class="inputs"
        bg-color="white"
        color="black"
        label="Zdjęcie projektu"
        ref="uploaderImageProject"
        @added="addImageProject"
        @removed="deleteImageProject"
      />
      <div class="image_project | inputs">
        <img :src="item_project.image_project" alt="photo_image" />
      </div>
    </div>
    <q-btn
      style="width: 100%; color: rgb(24, 102, 190)"
      label="Zaktualizuj projekt"
      @click.prevent="editProject"
    />
    <div class="images_panel">
      <q-uploader
        class="inputs"
        bg-color="white"
        color="black"
        multiple
        ref="uploaderImagesProject"
        label="Zdjęcie projektu"
        @added="addImagesUploaderProject"
        @removed="deleteImagesUploaderProject"
      />
      <q-btn
        style="width: 100%; color: green"
        label="Dodaj zdjęcia"
        @click.prevent="addImagesProject"
        :disabled="checkAddImagesProject"
      />
    </div>
    <ul class="images">
      <li v-for="image in item_project.images_project" :key="image.id">
        <div class="delete_image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#161a1d"
            @click="deleteImage(image.id)"
          >
            <path
              d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
            ></path>
          </svg>
        </div>
        <img :src="image.link" alt="photo_image" />
      </li>
    </ul>
  </form>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, reactive, watch, ref } from "vue";
export default {
  setup() {
    //values
    const router = useRoute();
    const store = useStore();
    const item_project = reactive({
      id: "",
      name: "",
      short_description: "",
      description: "",
      numeric: "",
      name_folder: "",
      image_project: [],
      images_project: [],
    });

    const reloadSingleProject = ref(false);

    const imageProject = ref([]);
    const uploaderImageProject = ref(null);

    const uploaderImagesProject = ref(null);
    const arrayImagesProjectUploader = ref([]);

    //functions
    store.dispatch("adminPanel/loadSingleProject", router.params.id);

    const loadProjectValues = () => {
      setTimeout(() => {
        item_project.id = loadSinglePoroject.value.id;
        item_project.name = loadSinglePoroject.value.name;
        item_project.short_description = loadSinglePoroject.value.short_description
        item_project.description = loadSinglePoroject.value.description;
        item_project.numeric = loadSinglePoroject.value.numeric;
        item_project.name_folder = loadSinglePoroject.value.name_folder;
        item_project.image_project = loadSinglePoroject.value.image_project;
        item_project.images_project = loadSinglePoroject.value.images_project;
      }, 200);
    };

    const deleteImage = async (id) => {
      const obj = {
        off: true,
        title: "Czy na pewno chcesz usunąć zdjęcie?",
        fetchApi: {
          link: "routers/projects/delete_image",
          method: "DELETE",
          body: { id: id },
        },
        params: router.params.id,
        loadDataBase: "loadSingleProject",
      };
      store.commit("adminPanel/confirmdOptions", obj);
    };

    const editProject = async () =>{
        const formData = new FormData()
        formData.append('id', item_project.id)
        formData.append('name', item_project.name)
        formData.append('short_description', item_project.short_description)
        formData.append('description', item_project.description)
        formData.append('numeric', item_project.numeric)
        formData.append('name_folder', item_project.name_folder)
        for(const image of imageProject.value){
            formData.append('image_project', image) 
        }

        const url = "https://projekt1.server.arturscibor.pl/routers/project/edit_project"
        const headers = {
        authorization: `Bearer ${store.getters["options/saveTokens"].accesToken}`,
      };

        const response = await fetch(url, {
            method:"PUT",
            headers:headers,
            body: formData
        })

        const responseData = await response.json()
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
      restartUploader(uploaderImageProject);
      imageProject.value = []
      store.commit("adminPanel/confirmedPopuedBox", obj);
      store.dispatch("adminPanel/loadSingleProject", router.params.id);
    }

    const addImageProject = (image) => {
      for (const item of image) {
        imageProject.value.push(item);
      }
    };

    const deleteImageProject = (id) => {
      const findId = imageProject.value.findIndex(
        (p) => p.id === id._key
      );
      imageProject.value.splice(findId, 1);
    };

    const addImagesUploaderProject = (image) => {
      for (const item of image) {
        arrayImagesProjectUploader.value.push(item);
      }
    };

    const deleteImagesUploaderProject = (id) => {
      const findId = arrayImagesProjectUploader.value.findIndex(
        (p) => p.id === id._key
      );
      arrayImagesProjectUploader.value.splice(findId, 1);
    };

    const restartUploader = (uploader) => {
      uploader.value.reset();
    };

    const addImagesProject = async () => {
      const formData = new FormData();
      formData.append("id_project", item_project.id);
      formData.append("name_folder", item_project.name_folder);
      for (const image of arrayImagesProjectUploader.value) {
        formData.append("images", image);
      }

      const url = "https://projekt1.server.arturscibor.pl/routers/projects/add_images_project";
      const headers = {
        authorization: `Bearer ${store.getters["options/saveTokens"].accesToken}`,
      };

      const response = await fetch(url, {
        method: "POST",
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
      restartUploader(uploaderImagesProject);
      store.commit("adminPanel/confirmedPopuedBox", obj);
      store.dispatch("adminPanel/loadSingleProject", router.params.id);
    };

    //computed

    const checkAddImagesProject = computed(() => {
      if (arrayImagesProjectUploader.value.length === 0) {
        return true;
      }
      return false;
    });

    const loadSinglePoroject = computed(() => {
      return store.getters["adminPanel/loadSingleProject"];
    });

    //wachers
    watch(loadSinglePoroject, () => {
      loadProjectValues();
    });

    return {
      item_project,
      deleteImage,
      reloadSingleProject,
      addImagesProject,
      addImagesUploaderProject,
      deleteImagesUploaderProject,
      uploaderImagesProject,
      checkAddImagesProject,
      addImageProject,
      deleteImageProject,
      uploaderImageProject,
      imageProject,
      editProject
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-project__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

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
  .upload-image_project {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .image_project {
      width: 100%;
      height: 20rem;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .images_panel {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 10px;
  }
  .images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 20rem;
      height: 20rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      border-radius: 8px;
      box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 1);

      .delete_image {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 0.5rem;
        svg {
          width: 2.5rem;
          height: 2.5rem;
          background-color: red;
          border-radius: 8px;
          cursor: pointer;
          padding: 0.2rem;
        }
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .inputs {
    width: 100%;
  }
}
@media (min-width: 750px) {
  .edit-project__container {
    .title__numeric {
      flex-direction: row;
    }
    .short-description__descriptions {
      flex-direction: row;
    }
    .upload-image_project {
      flex-direction: row;
    }
  }
}
</style>
