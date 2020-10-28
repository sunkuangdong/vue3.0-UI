<template>
  <div>Button</div>
  <h1>示例1</h1>
  <div>
    <Button>默认</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
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
    };
  },
  components: { Button },
};
</script>

<style scoped lang=scss>
</style>
