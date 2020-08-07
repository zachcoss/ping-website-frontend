<template>
  <div class="columns">
    <div class="column is-one-third">
      <label class="label">History</label>
      <div class="field is-grouped">
        <div class="control">
          <input class="input" type="text" placeholder="Filter" v-model="filter" :disabled="!pingDataActive"/>
        </div>
        <div class="control">
          <button class="button is-light" v-on:click="resetPingDataAction" :disabled="!pingDataActive">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: "PingFilter",
  computed: {
    ...mapGetters('ping', ['pingDataActive']),
    ...mapFields('ping', ['filter']),
  },
  methods: {
    ...mapActions('ping', ['resetPingData']),
    resetPingDataAction: async function() {
      try {
        const resetRequest = await this.resetPingData()
      } catch(err) {
        console.log(err)
      }
    }
  }
};
</script>