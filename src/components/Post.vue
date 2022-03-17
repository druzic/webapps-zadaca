<template>
  <v-container>
    <v-card>
      <v-card-title>id: {{ id }}</v-card-title>
      <v-card-subtitle> detail:{{ details }}</v-card-subtitle></v-card
    >
    <v-card-actions
      ><router-link :to="{ name: 'info', params: { shaID: id } }"
        ><v-btn style="color: purple">more info</v-btn></router-link
      ></v-card-actions
    >
  </v-container>
</template>

<script>
export default {
  name: "Post",
  props: {
    id: String,
    details: String,
  },
};
</script>

<style></style>
