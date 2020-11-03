<template>
  <div>
    <!-- <Switch :value="y" @input="y = $event" /> -->
    <Switch v-model:value="SwitchFlag" />
  </div>
</template>

<script>
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

<style scoped lang=scss>
</style>
