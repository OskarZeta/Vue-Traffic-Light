import {
  LIGHTS_TIMINGS,
  TICK_LENGTH,
  BLINK_TIME
} from '../constants'
import Light from '../components/Light'
import SaveBtn from '../components/SaveBtn'
import LoadBtn from '../components/LoadBtn'
import EventBus from '../EventBus'

export default {
  components: {
    Light,
    SaveBtn,
    LoadBtn
  },
  data () {
    return {
      counter: this.$route.params.time || 0,
      alive: true,
      dying: false,
      lightType: this.$route.name,
      nextLightType: this.$route.params.nextLightType || '',
      indervalId: null
    }
  },
  computed: {
    getTimeLeft () {
      return LIGHTS_TIMINGS[this.lightType] - this.counter
    }
  },
  methods: {
    computeLightProps () {
      EventBus.$emit('sendTimeLeft', this.getTimeLeft)
      if (this.getTimeLeft <= 0) {
        this.alive = false
      } else if (this.getTimeLeft <= BLINK_TIME) {
        this.dying = true
      } else {
        this.alive = true
        this.dying = false
      }
    },
    setLightUpdateInterval () {
      this.computeLightProps()
      this.indervalId = setInterval(() => {
        this.counter++
        this.computeLightProps()
      }, TICK_LENGTH)
    },
    loadAppState ({ lightType, nextLightType, time }) {
      if (this.lightType !== lightType) {
        this.$router.push({ name: lightType, params: { time, nextLightType } })
      } else {
        clearInterval(this.indervalId)
        this.counter = time
        this.nextLightType = nextLightType
        this.setLightUpdateInterval()
      }
    }
  },
  created () {
    if (this.lightType !== 'yellow') {
      this.nextLightType = 'yellow'
    }
    EventBus.$on('requestAppState', () => {
      EventBus.$emit('saveAppState', {
        lightType: this.lightType,
        nextLightType: this.nextLightType,
        time: this.counter
      })
    })
    EventBus.$on('loadAppState', this.loadAppState)
  },
  updated () {
    if (!this.alive) {
      this.$router.push({ name: this.nextLightType })
    }
  },
  beforeDestroy () {
    clearInterval(this.indervalId)
    EventBus.$off('loadAppState', this.loadAppState)
  }
}
