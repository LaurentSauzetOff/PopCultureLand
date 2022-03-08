<template>
  <main class="post-view" v-if="currentBlog">
    <v-btn icon style="background-color: white" x-large @click="goBack"
      ><v-icon x-large style="color: #303030">mdi-arrow-left</v-icon></v-btn
    >
    <div class="container quillWrapper">
      <h1>{{ this.currentBlog[0].blogTitle }}</h1>
      <h4>
        Posté le :
        {{
          new Date(this.currentBlog[0].blogDate).toLocaleString("fr-fr", {
            dateStyle: "long",
          })
        }}
      </h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div
        class="post-content ql-editor"
        v-html="this.currentBlog[0].blogHTML"
      ></div>
      <div class="post-content-author">
        {{ this.currentBlog[0].blogAuthor }}
      </div>
      <div v-if="user" class="author" ref="profile">
        <p>
          {{ this.$store.state.profileFirstName }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import "firebase/auth";
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
      currentAuthor: "",
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
      return post.blogTitle === this.$route.params.blogid;
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 14px -1px black, 8px 8px 14px -1px black;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h4 {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 24px;
    }

    img {
      height: 250px;
      object-fit: contain;
      max-height: 250px;
    }
  }
  .post-content {
    p::first-letter {
      color: blue;
      font-size: 400%;
      font-weight: 900;
    }
  }

  .author {
    margin: 30px 0;
    font-style: italic;
  }
}
</style>
