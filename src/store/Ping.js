import Vue from 'vue'
import _ from 'lodash'

import { getField, updateField } from 'vuex-map-fields';

const state = () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    data: [],
    filter: '',
    modal: false,
})

const getters = {
    getField,
    pingDataActive: (state, getters) => {
        if (!_.size(state.data)) return false;
        else return true;
    },
    pingData: (state, getters) => () => {
        return _.filter(state.data, (data) => {
            if (!state.filter) return true;

            if (_.includes(data.url, state.filter)) return true;
            else return false;
        })
    }
}

const actions = {
    async getHealthcheck({ commit, state, rootState }, payload) {
        try {
            const requestUrl = `${state.apiUrl}/healthcheck`
            const request = await Vue.$axios.get(requestUrl)
            return request
        } catch(err) {
            return Promise.reject(err)
        }
    },
    async getPingData({ commit, state, rootState }, payload) {
        try {
            const requestUrl = `${state.apiUrl}/ping-data`
            const request = await Vue.$axios.get(requestUrl)
            commit('replacePingData', request.data)
            return request
        } catch(err) {
            return Promise.reject(err)
        }
    },
    async storePingData({ commit, state, rootState }, payload) {
        try {
            const requestUrl = `${state.apiUrl}/ping-data`
            const requestBody = { url: payload }
            const request = await Vue.$axios.post(requestUrl, requestBody)
            commit('addPingData', request.data)
            return request
        } catch(err) {
            return Promise.reject(err)
        }
    },
    async resetPingData({ commit, state, rootState }, payload) {
        try {
            const requestUrl = `${state.apiUrl}/ping-data`
            const request = await Vue.$axios.delete(requestUrl)
            commit('removePingData')
            return request
        } catch(err) {
            return Promise.reject(err)
        }
    },
}

const mutations = {
    updateField,
    replacePingData(state, payload) {
        state.data = payload
    },
    addPingData(state, payload) {
        state.data.push(payload)
    },
    removePingData(state, payload) {
        state.data = []
    },
    showModal(state, payload) {
        state.modal = true
    },
    hideModal(state, payload) {
        state.modal = false
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}