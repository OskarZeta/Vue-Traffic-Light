<template>
  <div>
    <button v-on:click="handleClick">Load state</button>
  </div>
</template>

<script>
import EventBus from '../EventBus'

export default {
  methods: {
    handleClick () {
      const data = JSON.parse(localStorage.getItem('traffic-light-state')) || false
      if (!data) {
        return console.log('You have no state saved yet')
      }
      const { lightType, nextLightType, time } = data
      EventBus.$emit('loadAppState', {
        lightType,
        nextLightType,
        time
      })
    }
  }
}
</script>
