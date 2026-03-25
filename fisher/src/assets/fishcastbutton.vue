<script setup>
import * as icons from '@hugeicons/core-free-icons/index'
import { HugeiconsIcon } from '@hugeicons/vue';
</script>

<template>
    <button class="fixed bottom-8 right-1/2 translate-x-1/2 font-header bg-secondary-4 w-24 h-24 rounded-xl flex flex-col items-center justify-center text-orange-50 active:scale-90">
        <HugeiconsIcon :icon="icons.FishingHookIcon" color="currentColor" :size="36"/>
        <h1 class="text-2xl">Fish</h1>
    </button>
</template>