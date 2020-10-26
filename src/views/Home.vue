<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>Vue3.0 UI</h1>
        <h2>一个很厉害的 UI 框架</h2>
        <p class="actions">
            <a href>GitHub</a>
            <a href>开始</a>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    name: "",
    data() {
        return {};
    },
    methods: {},
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }
}
</style>
