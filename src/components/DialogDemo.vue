<template>
  <div>
    <div>Button 示例</div>
    <Demo :component="Dialog1Demo" />
  </div>
</template>

<script>
import { ref } from "vue";
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo };
  },
};
</script>

<style scoped lang="scss">
</style>
