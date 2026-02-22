<script setup>
import { ref } from 'vue';
    import biome from '@/theme/biome.vue'
    import Header from './components/header.vue';
    import castbutton from './components/castbutton.vue';

    const currentbiome = ref("ocean");
</script>

<template>
    <biome :biome="currentbiome"/>

    <Header :biome="currentbiome"/>

    <castbutton class="fixed bottom-10 right-[calc(50%-80px)]"/>
</template>