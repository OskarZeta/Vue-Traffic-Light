<template>
  <div>
    <Light type="red" />
    <Light type="yellow" />
    <Light
      type="green"
      v-bind:alive="alive"
      v-bind:dying="dying"
    />
  </div>
</template>

<script>
import viewMixin from '../mixins/viewMixin'

export default {
  mixins: [viewMixin]
}
</script>
