<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(til,index) in titles"
        :key="index"
        :class="{selected:til===selected}"
        @click="selectNav(til)"
        :ref="el => {if(til === selected) selectedItem = el}"
      >{{til}}</div>
      <!-- 导航会动的横线 -->
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="gulu-tabs-content">
    <component :is="current" :key="current.props.title" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import Tab from "../lib/Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // 声明navItems, 是导航标签的数组
    const selectedItem = ref<HTMLDivElement>(null);
    // 导航宽度
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          // JS计算div条的宽度
          // divs中的每一个div是否有包含selected属性
          // contains会返回true或false
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          // 计算出div条的运动距离
          const {
            left: containerLeft,
          } = container.value.getBoundingClientRect();
          const {
            left: selectedItemLeft,
          } = selectedItem.value.getBoundingClientRect();

          const left = selectedItemLeft - containerLeft;
          indicator.value.style.left = left + "px";
        },
        { flush: "post" }
      );
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签 必须是Tab!");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
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
      selectedItem,
      indicator,
      container,
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>