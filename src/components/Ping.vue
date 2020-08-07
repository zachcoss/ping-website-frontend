<template>
  <div class="container px-3 py-3">
    <PingInput />
    <hr />
    <PingFilter />
    <PingTable />
  </div>
</template>

<script>
import PingInput from "./PingInput";
import PingFilter from "./PingFilter";
import PingTable from './PingTable'

export default {
  name: "Ping",
  components: {
    PingInput,
    PingFilter,
    PingTable,
  },
};
</script>