<template>
  <div v-bind:class="getClass"></div>
</template>

<script>
export default {
  props: {
    type: String,
    alive: Boolean,
    dying: Boolean
  },
  computed: {
    getClass () {
      const { type, alive, dying } = this
      return alive ? dying ? `${type}-blink` : type : `${type}-faded`
    }
  }
}
</script>

<style scoped>
  div {
    width: 50px;
    height: 50px;
    background-color: #EEE;
    border-radius: 50px;
    border: 1px solid black;
    margin: 10px;
  }
  .red {
    background-color: red;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
  .red-blink, .yellow-blink, .green-blink {
    animation-duration: 500ms;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .red-blink {
    animation-name: blink--red;
  }
  .yellow-blink {
    animation-name: blink--yellow;
  }
  .green-blink {
    animation-name: blink--green;
  }
  @keyframes blink--red {
    from {
      background: red;
    }
    to {
      background-color: #EEE;
    }
  }
  @keyframes blink--yellow {
    from {
      background: yellow;
    }
    to {
      background-color: #EEE;
    }
  }
  @keyframes blink--green {
    from {
      background: green;
    }
    to {
      background-color: #EEE;
    }
  }
</style>
