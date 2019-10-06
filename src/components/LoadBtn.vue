<template>
  <button v-on:click="handleClick">Load</button>
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

<style scoped>
button {
  color: rgb(230, 0, 0);
  transition: 0.15s;
}
button:hover {
  color: red;
  text-shadow: 0 0 2px red, 0 0 1em red;
}
button:active {
  color: rgba(230, 0, 0, 0.6);
  text-shadow: none;
}
</style>
