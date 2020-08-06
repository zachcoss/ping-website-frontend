import Vue from 'vue'

const state = () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    data: [],
})

const getters = {

}

const actions = {
    async getHealthcheck({ commit, state, rootState }, payload) {
        try {
            const requestUrl = `${state.apiUrl}/healthcheck`
            const request = await Vue.$axios.get(requestUrl)
            return request
        } catch(err) {
            return err
        }
    },
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}