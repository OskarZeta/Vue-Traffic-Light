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
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: 2px solid #122;
    margin: 18px 0;
  }
  .red {
    background-color: rgb(230, 0, 0);
  }
  .red-faded {
    background-color: rgba(230, 0, 0, 0.4);
  }
  .yellow {
    background-color: rgb(255, 120, 0);
  }
  .yellow-faded {
    background-color: rgba(255, 120, 0, 0.4);
  }
  .green {
    background-color: rgb(76, 187, 23);
  }
  .green-faded {
    background-color: rgba(76, 187, 23, 0.4);
  }
  .red-blink, .yellow-blink, .green-blink {
    animation-duration: 400ms;
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
      background: rgb(230, 0, 0);
    }
    to {
      background-color: rgba(230, 0, 0, 0.5);
    }
  }
  @keyframes blink--yellow {
    from {
      background: rgb(255, 120, 0);
    }
    to {
      background-color: rgba(255, 120, 0, 0.5);
    }
  }
  @keyframes blink--green {
    from {
      background: rgb(76, 187, 23);
    }
    to {
      background-color: rgba(76, 187, 23, 0.5);
    }
  }
</style>
