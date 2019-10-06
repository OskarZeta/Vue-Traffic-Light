<template>
  <div>
    <button v-on:click="handleClick">Save state</button>
  </div>
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
