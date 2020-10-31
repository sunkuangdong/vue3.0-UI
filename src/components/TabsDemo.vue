<template>
  <div>
    <div>Tabs 示例</div>
    <h1>示例1</h1>
    <Tabs v-model:selected="selectText">
      <Tab :title="'导航1'">内容1</Tab>
      <Tab :title="'导航2'">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selectText = ref("导航1");
    return {
      selectText,
    };
  },
};
</script>

<style scoped lang=scss>
</style>
