<demo>
支持 size
</demo>
<template>
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
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>