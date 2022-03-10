<template>
  <v-content>
    <div class="mt-10">
      <div class="headline text-center">A propos</div>
    </div>

    <div class="pa-0" style="display: flex; flex-wrap: wrap">
      <v-card-item v-for="(item, i) in items" :key="i" class="mx-auto">
        <v-card flat tile class="mx-auto my-5" width="90%">
          <v-img :src="item.src" class="grey lighten-2"></v-img>
          <v-card-text class="text--primary text-center">
            <div class="title">{{ item.name }}</div>
            <p>{{ item.title }}</p>
          </v-card-text>
        </v-card>
      </v-card-item>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          src: require("../assets/background1.png"),
          name: "Laurent Sauzet",
          title: "Blogueur",
        },
        {
          src: require("../assets/background1.png"),
          name: "M-J",
          title: "Développeur web",
        },
        {
          src: require("../assets/background1.png"),
          name: "M-J",
          title: "Développeur web",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
