<template>
    <table class="table is-narrow is-fullwidth is-hoverable">
        <tbody>
            <tr v-bind:class="{ 'table-row-inactive': !pingDataActive }">
                <th class="icon-column">Icon</th>
                <th>Site</th>
                <th>Ping</th>
            </tr>
            <tr v-for="(ping) in pingData()" :key="ping._id">
                <td class="icon-column">
                    <img class="icon-column-img" src="/favicon.ico">
                </td>
                <td>{{ ping.url }}</td>
                <td>{{ ping.duration }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'PingTable',
    computed: {
        ...mapGetters('ping', ['pingData','pingDataActive'])
    }
}
</script>

<style lang="scss">
.icon-column {
    width: 25px;
}
.icon-column-img {
    height: 25px;
    width: 25px;
}
.table-row-inactive th {
    color:lightgrey !important;
}
</style>