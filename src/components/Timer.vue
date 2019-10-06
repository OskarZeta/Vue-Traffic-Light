<template>
  <div class="timer__container">
    <span class="timer__text">{{ time }}</span>
  </div>
</template>

<script>
import EventBus from '../EventBus'

export default {
  data () {
    return {
      time: 0
    }
  },
  created () {
    EventBus.$on('sendTimeLeft', time => {
      this.time = time
    })
  }
}
</script>

<style scoped>
.timer__container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 9%;
  left: calc(50% - 60px);
  width: 120px;
  height: 80px;
  background: black;
  border-radius: 10px;
}
.timer__text {
  color: darkorange;
  font-family: 'Digital-7';
  font-size: 64px;
}
</style>
