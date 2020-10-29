<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="dialogVisible"
      :closeOnClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
      :title="title"
    >
      <div>你好</div>
      <div>hi</div>
    </Dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog },
  setup() {
    const title = "你好";
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
    return { dialogVisible, toggle, ok, cancel, title };
  },
};
</script>

<style scoped lang="scss">
</style>
