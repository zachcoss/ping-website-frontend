<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <label class="label">URL</label>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="Enter URL you would like to ping" v-model="url" v-on:keyup.enter="storePingDataAction" />
        </div>
        <div class="control">
          <a class="button is-info" v-on:click="storePingDataAction">Ping</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "PingInput",
  data: function() {
    return {
      url: '',
    }
  },
  methods: {
    ...mapActions('ping', ['storePingData']),
    storePingDataAction: async function() {
      try {
        await this.storePingData(this.url)
      } catch(err) {
        console.log(err)
      }
    }
  }
};
</script>