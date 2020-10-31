<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        class="gulu-tabs-nav-item"
        v-for="(til,index) in titles"
        :key="index"
        :class="{selected:til===selected}"
        @click="selectNav(til)"
      >{{til}}</div>
    </div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item" :is="current" />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "../lib/Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签 必须是Tab!");
      }
    });
    const current = computed(() =>
      defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0]
    );
    // 所有的title
    const titles = defaults.map((item) => item.props.title);
    // 导航的选中事件
    const selectNav = (til: string) => {
      context.emit("update:selected", til);
    };
    return {
      defaults,
      titles,
      current,
      selectNav,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>