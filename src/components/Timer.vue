<template>
  <div>
    <h3>Time until next signal: </h3>
    <span>{{ time }}</span>
  </div>
</template>

<script>
import EventBus from '../EventBus'
import { TICK_LENGTH } from '../constants'

export default {
  data () {
    return {
      time: 0
    }
  },
  created () {
    // EventBus.$emit('getTimeLeft')
    // let intervalId = setInterval(() => {
    //   EventBus.$emit('getTimeLeft')
    // }, TICK_LENGTH)
    // EventBus.$on('setTimeLeft', time => {
    //   this.time = time
    // })

    EventBus.$on('sendTimeLeft', time => {
      this.time = time
    })
  }
}
</script>

<style scoped>

</style>
