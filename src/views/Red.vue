<template>
  <div>
    <div>
      <Light
        type="red"
        v-bind:alive="alive"
        v-bind:dying="dying"
      />
      <Light type="yellow" />
      <Light type="green" />
    </div>
    <div>
      <Timer v-bind:time="getTimeLeft('red')"/>
    </div>
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  mixins: [viewMixin],
  mounted () {
    this.countDown('red', 'yellow')
  }
}
</script>

<style scoped>

</style>
