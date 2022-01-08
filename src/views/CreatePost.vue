<template>
  <div class="create-post">
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Erreur : </span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input
          type="text"
          placeholder="Entrer un titre d'article"
          v-model="blogTitle"
        />
        <div class="upload-file">
          <label for="blog-photo">Uploader une photo</label>
          <input
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            accept=".jpg, .png, .jpeg"
          />
          <button
            class="preview"
            :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }"
          >
            Aperçu de la photo
          </button>
          <span>Fichier choisit : {{ this.$store.state.blogPhotoName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor
          :editorOptions="editorSettings"
          v-model="blogHTML"
          useCustomImageHandler
          @image-added="imageHandler"
        />
      </div>
      <div class="blog-actions">
          <button>Publier</button>
          <router-link class="router-button" to="#">Prévisualiser l'article</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data() {
    return {
      error: null,
      errorMsg: null,
      editorSettings: {
        modules: {
          ImageResize: {},
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
