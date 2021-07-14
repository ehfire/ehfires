<template>
  <div class="fireMain">
    <div class="fireMain_header">
      <Header />
    </div>
    <div class="fireMain_content">
      <div class="fireMain_menu" :class="uiCollapse ? 'is-collapse' : ''">
        <Menu />
      </div>
      <div class="fireMain_view"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/components/menu/Menu.vue";
import Header from "@/components/header/Header.vue";
export default {
  name: "Layout",
  data() {
    return {};
  },
  computed: {
    ...mapState(["uiCollapse"]),
  },
  components: {
    Menu,
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/layout.scss";
</style>
