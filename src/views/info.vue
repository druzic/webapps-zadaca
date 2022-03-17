<template>
  <v-container v-if="okej.commit"
    ><v-card
      ><v-card-title>{{ shaID }}</v-card-title>
      <v-card-subtitle>{{ okej.commit.author.name }}</v-card-subtitle>
      <v-card-subtitle>{{ okej.commit.author.email }}</v-card-subtitle>
      <v-card-subtitle>{{ okej.commit.author.date }}</v-card-subtitle>
      <v-card-subtitle>{{ okej.commit.message }}</v-card-subtitle>
      <v-btn @click="back()">go bak</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "info",
  data() {
    return {
      shaID: this.$route.params.shaID,
      okej: [],
    };
  },

  async mounted() {
    const varijabla = await axios.get(
      `https://api.github.com/repos/vuejs/vue/commits/${this.shaID}`
    );
    this.okej = varijabla.data;
    console.log("radim");
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
