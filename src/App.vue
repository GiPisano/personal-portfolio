<script>
import AppNav from "./components/AppNav.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppNav,
  },
};
</script>

<template>
  <app-nav></app-nav>

  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
body {
  margin-bottom: 100px;
  margin-top: 30px;
}
</style>
