<script setup>
import { computed } from 'vue';

const props = defineProps({
    biome: String,
    time: String,
    weather: String
});

const bgColor = computed(() =>
    `var(--color-${props.biome}-${props.time})`
);

const overlayOpacity = computed(() => {
    switch (props.weather) {
        case 'rain': return 0.2;
        case 'storm': return 0.4;
        case 'fog': return 0.15;
        default: return 0;
    }
});
</script>

<template>
    <main class="w-full h-screen -z-50">
        <div :style="{ backgroundColor: bgColor }" class="absolute inset-0 -z-50"></div>
        <div :style="{opacity: overlayOpacity }"  class="absolute inset-0 bg-black -z-50"></div>
        <slot></slot>
    </main>
</template>