<template>
  <v-app>
    <v-main class="light-background">
      <v-container class="pa-0" style="height: 100%" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$router.push("/login");
  },
};
</script>
