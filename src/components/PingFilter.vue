<template>
  <div class="columns">
    <div class="column is-one-third">
      <label class="label">History</label>
      <div class="field is-grouped">
        <div class="control">
          <input class="input" type="text" placeholder="Search URL" v-model="filter" :disabled="!pingDataActive"/>
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
};
</script>