// /stores/world.js

import { defineStore } from 'pinia'
import { getWorldTime, getWeather } from '@/script/systems/worldsystem'

export const useWorldStore = defineStore('world', {
  state: () => ({
    biome: 'river'
  }),

  getters: {
    time: () => getWorldTime(),
    weather: () => getWeather(),
    biome: () => getBiome()
  },

  actions: {
    setBiome(biome) {
      this.biome = biome
    }
  }
})