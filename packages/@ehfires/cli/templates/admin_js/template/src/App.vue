<template>
  <div id="app">
    <template v-if="!isLogin">
      <Login />
    </template>
    <template v-else>
      <Layout>
        <!-- <router-view /> -->
      </Layout>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Login from "@/views/login/login";
import Layout from "@/components/layout/Layout.vue";
export default {
  name: "fireApp",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin"]),
  },
  components: {
    Login,
    Layout,
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
