<script setup>
import contentContainer from '@/assets/contentcontainer.vue';
import { getWorldTime, getWeather } from '@/script/systems/worldsystem'

const props = defineProps({
    player : {
        type : Object,
        required : true
    }
})

</script>

<template>
    <contentContainer class="fixed bottom-8 left-8 w-1/4">
        <h1 class="text-2xl font-header">World Information</h1>
        <ul>
            <li>Biome: river</li>
            <li>Time: {{ getWorldTime() }}</li>
            <li>Weather: {{ getWeather() }}</li>
        </ul>
        <h1 class="text-2xl font-header">Player Information</h1>
        <ul>
            <li>Level: {{ player.getLevel() }}</li>
            <li>Fish Count: {{ player.getFishCount() }}</li>
        </ul>
    </contentContainer>
</template>