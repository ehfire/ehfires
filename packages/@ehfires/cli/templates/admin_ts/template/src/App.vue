<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Layout } from "@/layout";

@Component({
  name: "App",
  components: {
    Layout,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
