<template>
  <div class="modal" v-bind:class="{ 'is-active': modal }" v-on:click="hideModal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-danger">
        <div class="message-header">
          <p>Delete Ping History</p>
          <button class="delete"></button>
        </div>
        <div class="message-body">
          <p>Are you sure you want to remove all data?</p>
          <div class="field is-grouped mt-5">
            <div class="control">
              <button class="button is-link is-danger" v-on:click="resetPingDataAction">Delete</button>
            </div>
            <div class="control">
              <button class="button is-link is-danger is-light">Cancel</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    <button class="modal-close is-large">Reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: "PingResetConfirmation",
  computed: {
      ...mapState('ping', ['modal'])
  },
  methods: {
    ...mapMutations('ping', ['hideModal']),
    ...mapActions("ping", ["resetPingData"]),
    resetPingDataAction: async function () {
      try {
        const resetRequest = await this.resetPingData();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>