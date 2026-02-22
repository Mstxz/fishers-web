<script setup>
import { ref } from 'vue';

const props = defineProps({
    biome: {
        type: String,
        default: 'River'
    }
});


</script>

<template>
    <header class="font-header text-2xl bg-primary text-secondary-3 flex justify-between p-5 m-4 rounded-xl shadow-2xl border-6">
        <h1>Fishers</h1>
        <p>Current Biome: {{ props.biome }}</p>
        <nav>
            <button>Menu</button>
        </nav>
    </header>
</template>