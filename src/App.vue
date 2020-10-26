<template>
<router-link to="/">Frank</router-link>
<router-link to="/xxx">Frank2</router-link>
<router-view />
</template>

<script>
import Frank from "./components/Frank.vue";

export default {
    name: "App",
    components: {
        Frank,
    },
};
</script>
