<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel" />
  </div>
</template>

<script>
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog },
  setup() {
    const dialogVisible = ref(false);
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    const ok = () => {
      dialogVisible.value = false;
    };
    const cancel = () => {
      dialogVisible.value = false;
    };
    return { dialogVisible, toggle, ok, cancel };
  },
};
</script>

<style scoped lang="scss">
</style>
