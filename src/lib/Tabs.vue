<template>
  <div>
    <span v-for="(til,index) in titles" :key="index">{{til}}</span>
  </div>
  <component v-for="(c,index) in defaults" :is="c" :key="index" />
</template>

<script>
import Tab from "../lib/Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签 必须是Tab!");
      }
    });
    const titles = defaults.map((item) => item.props.title);
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style scoped lang=scss>
</style>