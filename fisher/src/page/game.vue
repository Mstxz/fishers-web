<script setup>
import { reactive } from 'vue';
import Biome from '@/components/biome.vue';
import fishCastButton from '@/assets/fishcastbutton.vue';
import Playerstats from '@/components/playerstats.vue';

import { getWorldTime , getWeather } from '@/script/systems/worldsystem';
import Player from '@/script/class/player';

let player = reactive(new Player());

</script>

<template>
    <Biome biome="river" :time="getWorldTime()" :weather="getWeather()">
        <Playerstats :player="player"/>
        <fishCastButton @click="player.cast()"/>
    </Biome>
</template>