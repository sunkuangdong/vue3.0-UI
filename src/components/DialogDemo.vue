<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="dialogVisible" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog },
  setup() {
    const dialogVisible = ref(false);
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    return { dialogVisible, toggle };
  },
};
</script>

<style scoped lang="scss">
</style>
