<template>
  <div id="app">
    <div class="app__background">
      <div class="app__content">
        <div class="lights__container">
          <router-view class="lights"/>
          <img src="./assets/traffic-light.svg" class="lights__img" />
        </div>
        <Timer />
        <div class="buttons__container">
          <SaveBtn class="button" />
          <LoadBtn class="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from './components/Timer'
import SaveBtn from './components/SaveBtn'
import LoadBtn from './components/LoadBtn'

export default {
  components: {
    Timer,
    SaveBtn,
    LoadBtn
  }
}
</script>

<style>
@import url("./assets/fonts.css");

body {
  padding: 0;
  margin: 0;
  min-width: 500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(./assets/background.svg) no-repeat center 75%;
  background-size: cover;
  height: 100vh;
}
.app__background {
  width: 90%;
  height: 100%;
  position: relative;
  margin: 0 auto;
}
.app__content {
  position: absolute;
  left: 10%;
  bottom: 0%;
  width: 250px;
  height: 420px;
}
.lights__container {
  width: 100%;
}
.lights__container::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 0%;
  left: calc(50% - 35px);
  width: 70px;
  height: 130px;
  background: black;
}
.lights {
  position: absolute;
  top: 5%;
  left: 36%;
}
.lights__img {
  width: 100%;
}
.buttons__container {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: -15%;
}
.button {
  width: 80px;
  background: black;
  border: none;
  border-top-right-radius: 2vh;
  outline: none;
  font-family: 'Digital-7';
  font-size: 28px;
  padding: 8px 0;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
}
.button::after {
  display: block;
  content: '';
  position: absolute;
  background: black;
  top: 5%;
  right: 100%;
  width: 35px;
  height: 10px;
}
</style>
