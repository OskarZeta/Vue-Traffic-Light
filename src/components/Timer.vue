<template>
  <div>
    <h3>Time until next signal: </h3>
    <span>{{ time }}</span>
  </div>
</template>

<script>
export default {
  props: {
    time: Number
  }
}
</script>

<style scoped>

</style>
