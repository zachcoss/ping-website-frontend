<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted: async function() {
    try {
      const apiConnectionRequest = await this.getHealthcheck()
      console.log('API Connection', apiConnectionRequest.data)
      
      const getPingDataRequest = await this.getPingData()
    } catch(err) {
      console.log(err)
    }
  },
  methods: {
    ...mapActions('ping',['getHealthcheck', 'getPingData'])
  }
}
</script>

<style lang="scss">
@import './src/styles/main';
</style>