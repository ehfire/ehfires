<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "AppMain",
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
