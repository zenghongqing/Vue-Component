<template>
  <div id="app">
    <base-component>
      <h2 slot="slot1">BaseComponent slot</h2>
      <p>default slot</p>
    </base-component>
    <enhanced-com>
      <h2 slot="slot1">EnhancedComponent slot</h2>
      <p>default slot</p>
    </enhanced-com>
    <router-view/>
  </div>
</template>

<script>
import BaseComponent from './components/base-component'
import hoc from './assets/js/hoc'
const EnhancedCom = hoc(BaseComponent)
export default {
  name: 'App',
  components: {
    BaseComponent,
    EnhancedCom
  },
  created () {
    console.log(BaseComponent)
  },
  methods: {
    // handleCustClick () {
    //   console.log('customize-click')
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
