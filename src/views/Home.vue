<template>
  <div class="home">
    <Post
      v-for="okej in okej"
      :key="okej.sha"
      :details="okej.commit.message"
      :id="okej.sha"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  data() {
    return {
      okej: [],
    };
  },
  components: {
    Post,
  },
  async mounted() {
    const varijabla = await axios.get(
      "https://api.github.com/repos/vuejs/vue/commits"
    );
    this.okej = varijabla.data;
  },
};
</script>
