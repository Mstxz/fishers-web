<script setup>
import { computed } from 'vue';

const props = defineProps({
    biome: {
        type: String,
        default: 'river'
    }
});

const classes = computed(() => {
    const base = 'fixed inset-0 -z-10'

    const biomes = {
        river: 'bg-gradient-to-b from-river-primary via-river-secondary-1 to-river-secondary-2',
        volcano: 'bg-gradient-to-b from-volcano-primary via-volcano-secondary-1 to-volcano-secondary-2',
        ocean: 'bg-gradient-to-b from-ocean-primary via-ocean-secondary-1 to-ocean-secondary-2'
    }

    return `${base} ${biomes[props.biome]}`
})
</script>

<template>
    <div :class="classes"></div>
</template>