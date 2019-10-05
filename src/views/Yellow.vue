<template>
  <div>
    <div>
      <Light type="red" />
      <Light
        type="yellow"
        v-bind:alive="alive"
        v-bind:dying="dying"
      />
      <Light type="green" />
    </div>
    <div>
      <Timer v-bind:time="getTimeLeft('yellow')"/>
    </div>
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  props: {
    from: String
  },
  mixins: [viewMixin],
  beforeRouteEnter (to, from, next) {
    next(component => {
      component.countDown('yellow', from.name === 'green' ? 'red' : 'green')
    })
    next()
  }
}
</script>
<style scoped>

</style>
