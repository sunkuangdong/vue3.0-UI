<demo>
常规用法
</demo>
<template>
  <div>
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

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Dialog,
    Button,
  },
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