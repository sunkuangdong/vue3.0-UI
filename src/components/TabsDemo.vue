<template>
  <div>
    <Demo :component="Tabs1Demo" />
  </div>
</template>

<script>
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.Demo.vue";
import { ref } from "vue";
export default {
  components: { Demo },
  setup() {
    return {
      Tabs1Demo,
    };
  },
};
</script>

<style scoped lang=scss>
</style>
