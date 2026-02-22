<script setup>
import { ref } from 'vue'

const fish = ref(0)

function cast() {
    const amount = Math.floor(Math.random() * 10)
    fish.value += amount
}
</script>

<template>
    <button
        class="w-40 h-40 flex flex-col border-4 items-center justify-center rounded-full p-5 bg-primary text-secondary-3 text-2xl font-primary font-bold cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out"
        @click="cast"
    >
        <img src="/images/Rod.png" width="80" draggable="false">
        <h1>Cast</h1>
        <p>{{ fish }}</p>
    </button>
</template>