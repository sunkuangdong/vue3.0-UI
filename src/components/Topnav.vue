<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-sun" />
      </svg>
    </router-link>
    <div class="menu"></div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg class="toggleAside" @click="toogleMenu" v-if="toggleMemuButtonVisible">
      <use xlink:href="#icon-menu" />
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMemuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const meneVisible = inject<Ref<Boolean>>("meneVisible");
    const toogleMenu = () => {
      meneVisible.value = !meneVisible.value;
    };
    return {
      toogleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 26px;
      height: 26px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
