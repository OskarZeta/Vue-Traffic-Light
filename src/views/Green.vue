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
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  mixins: [viewMixin],
  mounted () {
    this.setLightUpdateInterval('yellow')
  }
}
</script>
<style scoped>

</style>
