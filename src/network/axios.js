import Axios from 'axios'

const AxiosInstance = {
    install(Vue) {

        const axios = Axios.create({
            baseURL: process.env.VUE_APP_API_URL,
        })

        // configure any instance
        // related settings

        // Mount axios instance
        Vue.$axios = axios
        Vue.$Axios = Axios

    }
};

export default AxiosInstance;