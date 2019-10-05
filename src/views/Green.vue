<template>
  <div>
    <div>
      <Light type="red" />
      <Light type="yellow" />
      <Light
        type="green"
        v-bind:alive="alive"
        v-bind:dying="dying"
      />
    </div>
    <div>
      <Timer v-bind:time="getTimeLeft('green')"/>
    </div>
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  mixins: [viewMixin],
  mounted () {
    this.countDown('green', 'yellow')
  }
}
</script>
<style scoped>

</style>
