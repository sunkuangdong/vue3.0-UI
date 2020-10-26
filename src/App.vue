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
        const menuVisible = ref(false);
        provide("xxx", menuVisible);
    },
};
</script>
