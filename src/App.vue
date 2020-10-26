<template>
<router-view />
</template>

<script>
import {
    provide,
    ref
} from "vue";
import Frank from "./components/Frank.vue";

export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true);
        provide("meneVisible", menuVisible);
    },
};
</script>
