<template>
  <div class="fireHeader">
    <div class="fireHeader_logo" :class="uiCollapse ? 'is-collapse' : ''">
      <img src="@/assets/common/logo.png" alt="" />
    </div>
    <div class="fireHeader_content">
      <span class="fireHeader_collapseBtn" @click="toggleCollapse">
        <template v-if="uiCollapse">
          <i class="el-icon-s-unfold"></i>
        </template>
        <template v-else>
          <i class="el-icon-s-fold"></i>
        </template>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as type from "@/stores/types";
export default {
  name: "headers",
  computed: {
    ...mapState(["uiCollapse"]),
  },
  methods: {
    //切换菜单面板
    toggleCollapse() {
      this.$store.commit(type._UICOLLAPSE, !this.uiCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/header.scss";
</style>
