<demo>
常规用法
</demo>
<template>
  <div>
    <Switch v-model:value="SwitchFlag" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const SwitchFlag = ref(false);
    return {
      SwitchFlag,
    };
  },
};
</script>