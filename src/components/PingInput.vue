<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <label class="label">URL</label>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Enter URL you would like to ping"
            v-model="url"
            v-on:keyup.enter="storePingDataAction"
            v-bind:class="{ 'is-danger': error }"
          />
          <p class="help" v-bind:class="{ 'is-danger': error }">{{ errorMsg }}</p>
        </div>
        <div class="control">
          <button
            class="button is-info"
            v-on:click="storePingDataAction"
            v-bind:class="{ 'is-loading': loading }"
            :disabled="loading"
          >Ping</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "PingInput",
  data: function () {
    return {
      url: "",
      loading: false,
      error: false,
      errorMsg: "",
    };
  },
  methods: {
    ...mapActions("ping", ["storePingData"]),
    storePingDataAction: async function () {
      if (!this.validProtocol()) {
        return this.setError("Please include a protocol: http:// or https://");
      }

      try {
        this.resetError();
        this.toggleLoading();
        await this.storePingData(this.url);
      } catch (err) {
        this.setError(err.response.data);
      } finally {
        this.toggleLoading();
      }
    },
    setError: function (msg) {
      this.error = true;

      if (msg === "URL Error") {
        this.errorMsg = "Please confirm URL";
      } else {
        this.errorMsg = msg;
      }
    },
    resetError: function () {
      this.error = false;
      this.errorMsg = "";
    },
    toggleLoading: function () {
      this.loading = !this.loading;
    },
    validProtocol: function () {
      if (_.includes(this.url, "http://") || _.includes(this.url, "https://")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>