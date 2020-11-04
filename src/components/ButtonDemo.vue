<template>
  <div>
    <div>Button 示例</div>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "../components/Button1.Demo.vue";
import Button2Demo from "../components/Button2.Demo.vue";
import Button3Demo from "../components/Button3.Demo.vue";
import Button4Demo from "../components/Button4.Demo.vue";
import Button5Demo from "../components/Button5.Demo.vue";
export default {
  setup(props) {
    const onClick = () => {
      console.log("onClick");
    };
    const onFocus = () => {
      console.log("onFocus");
    };
    return {
      onClick,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  },
  components: {
    Demo,
  },
};
</script>

<style scoped lang=scss>
</style>
