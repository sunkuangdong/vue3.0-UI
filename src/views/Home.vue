<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Vue3.0 UI</h1>
      <h2>一个很厉害的 UI 框架</h2>
      <p class="actions">
        <a href>GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-light" />
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-Vue" />
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts" />
    </svg>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.features {
  > svg {
    width: 64x;
    height: 64px;
  }
}
.banner {
  color: #007974;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/4;
      padding: 0 8px;
    }
  }
}
</style>
