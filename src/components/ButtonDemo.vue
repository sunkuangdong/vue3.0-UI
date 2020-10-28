<template>
  <div>Button</div>
  <h1>示例1</h1>
  <div>
    <Button>默认</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2 size</h1>
  <div>
    <Button size="big">大</Button>
    <Button>默认</Button>
    <Button size="small">小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
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
