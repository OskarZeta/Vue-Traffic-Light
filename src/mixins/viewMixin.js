import {
  TICKS_RED,
  TICKS_YELLOW,
  TICKS_GREEN,
  TICK_LENGTH,
  BLINK_TIME
} from '../constants'
import Light from '../components/Light'
import Timer from '../components/Timer'

export default {
  components: {
    Light,
    Timer
  },
  data () {
    return {
      counter: 0,
      alive: true,
      dying: false
    }
  },
  methods: {
    getMaxCounter (currentLight) {
      switch (currentLight) {
        case 'yellow' : {
          return TICKS_YELLOW
        }
        case 'green' : {
          return TICKS_GREEN
        }
        case 'red' :
        default : {
          return TICKS_RED
        }
      }
    },
    getTimeLeft (currentLight) {
      return this.getMaxCounter(currentLight) - this.counter
    },
    countDown (currentLight, nextLight) {
      let maxCounter = this.getMaxCounter(currentLight)
      const computeLightProps = () => {
        if (this.counter >= maxCounter - BLINK_TIME) {
          this.dying = true
        }
        if (this.counter === maxCounter) {
          clearInterval(intervalId)
          this.alive = false
          this.dying = false
          this.$router.push({ name: nextLight })
        }
      }
      computeLightProps()
      let intervalId = setInterval(() => {
        this.counter++
        computeLightProps()
      }, TICK_LENGTH)
    }
  }
}
