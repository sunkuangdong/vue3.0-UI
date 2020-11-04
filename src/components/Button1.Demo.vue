<demo>
常规用法
</demo>
<template>
  <div>
    <Button>默认</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
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