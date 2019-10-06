<template>
  <button v-on:click="handleClick">Save</button>
</template>

<script>
import EventBus from '../EventBus'

export default {
  data () {
    return {
      light: '',
      time: 0
    }
  },
  methods: {
    handleClick () {
      EventBus.$emit('requestAppState')
      console.log('Saved state')
    }
  },
  created () {
    EventBus.$on('saveAppState', ({ time, lightType, nextLightType }) => {
      localStorage.setItem('traffic-light-state', JSON.stringify({
        lightType,
        nextLightType,
        time
      }))
    })
  }
}
</script>

<style scoped>
button {
  color: rgb(76, 187, 23);
  transition: 0.15s;
}
button:hover {
  color: rgb(90, 224, 28);
  text-shadow: 0 0 2px rgb(90, 224, 28), 0 0 1em rgb(90, 224, 28);
}
button:active {
  color: rgba(76, 187, 23, 0.6);
  text-shadow: none;
}
</style>
