<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  mounted: async function() {
    try {
      const request = await this.getHealthcheck()
      console.log('API Connection', request.data)
    } catch(err) {
      console.log(err)
    }
  },
  methods: {
    ...mapActions('ping',['getHealthcheck'])
  }
}
</script>

<style lang="scss">
@import './src/styles/main';
</style>