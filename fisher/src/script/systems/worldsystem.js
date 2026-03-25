// /systems/worldSystem.js

export function getWorldTime() {
    const hour = (new Date().getUTCHours() + 7) % 24

    console.log(hour);

    if (hour >= 6 && hour < 12) return 'noon'
    if (hour >= 12 && hour < 18) return 'day'
    return 'night'
}

export function getWeather() {
    const now = new Date()

    const utcHours = now.getUTCHours()
    const block = Math.floor(utcHours / 4)

    const seed = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${block}`

    return seededWeather(seed)
}

function seededWeather(seed) {
    let hash = 0

    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    }

    const rand = Math.abs(hash % 100) / 100

    if (rand < 0.6) return 'clear'
    if (rand < 0.85) return 'rain'
    return 'storm'
}

const biomes = ['river', 'volcano', 'ocean'];

export function getNextBiome(current) {
    const index = biomes.indexOf(current);
    return biomes[(index + 1) % biomes.length];
}
