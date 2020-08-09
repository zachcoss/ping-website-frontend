<template>
    <table class="table is-narrow is-fullwidth is-hoverable">
        <tbody>
            <tr v-bind:class="{ 'table-row-inactive': !pingDataActive }">
                <th>Icon</th>
                <th>Site</th>
                <th>Ping</th>
            </tr>
            <tr v-for="(ping) in pingData()" :key="ping._id">
                <td>
                    <img class="icon-column-img" :src="ping.iconPath" @error="replaceMissingImage">
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
    },
    methods: {
        replaceMissingImage(e) {
            e.target.src = '/missing.png'
        }
    }
}
</script>

<style lang="scss">
.icon-column-img {
    height: 25px;
    width: 25px;
}
.table-row-inactive th {
    color:lightgrey !important;
}
</style>