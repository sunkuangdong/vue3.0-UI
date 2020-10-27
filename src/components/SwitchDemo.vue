<template>
<div>
    <Switch :value="y" @input="y = $event" />
</div>
</template>

<script>
import {
    ref
} from 'vue';
import Switch from "../lib/Switch.vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const y = ref(false)
        return {
            y
        }
    }
};
</script>

<style scoped lang=scss>
</style>
