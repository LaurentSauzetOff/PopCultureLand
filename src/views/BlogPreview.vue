<template>
  <div class="post-view">
    <v-btn icon style="background-color: white" x-large @click="goBack"
      ><v-icon x-large style="color: #303030">mdi-arrow-left</v-icon></v-btn
    >
    <div class="container quillWrapper">
      <h2>{{ this.blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ql-editor {
    padding: 0;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  img {
    width: 100%;
    margin: 50px 0;
  }
}
</style>
