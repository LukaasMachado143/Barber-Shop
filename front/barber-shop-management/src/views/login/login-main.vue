<template>
  <div class="pa-0 ma-0 background-color">
    <login-view />
  </div>
</template>

<script>
import loginView from "./components/login-view.vue";
export default {
  components: { loginView },
  name: "login-main",
};
</script>

<style lang="scss" scoped>
.background-color {
  background-color: RGB(127, 205, 205);
  height: 100%;
}
</style>