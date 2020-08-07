<template>
  <div class="container px-3 py-3">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p class="title is-4">How Fast is my Site?</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button class="button is-primary is-small" v-on:click="getPingDataAction">Refresh</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions('ping',['getPingData']),
    getPingDataAction: async function() {
      try {
        const getPingData = await this.getPingData()
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>