<template>
  <div class="container px-3 py-3">
    <PingInput />
    <hr />
    <PingFilter />
    <PingTable />
    <PingReset />
    <PingResetConfirmation />
  </div>
</template>

<script>
import PingInput from "./PingInput";
import PingFilter from "./PingFilter";
import PingTable from './PingTable'
import PingReset from './PingReset'
import PingResetConfirmation from "./PingResetConfirmation"

export default {
  name: "Ping",
  components: {
    PingInput,
    PingFilter,
    PingTable,
    PingReset,
    PingResetConfirmation
  },
};
</script>