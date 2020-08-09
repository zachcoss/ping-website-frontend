<template>
  <div class="field is-grouped" v-if="pingDataActive">
    <div class="control">
      <button class="button is-light" v-on:click="showModal">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PingReset",
  computed: {
    ...mapGetters("ping", ["pingDataActive"]),
  },
  methods: {
    ...mapMutations("ping", ["showModal"]),
  },
};
</script>