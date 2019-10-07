<template>
  <div>
    <Light type="red" />
    <Light
      type="yellow"
      v-bind:alive="alive"
      v-bind:dying="dying"
    />
    <Light type="green" />
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  mixins: [viewMixin],
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.nextLightType) {
        vm.nextLightType = from.name === 'green' ? 'red' : 'green'
      }
    })
    next()
  }
}
</script>
