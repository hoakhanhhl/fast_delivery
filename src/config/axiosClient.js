import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem('accessTokenFD')
     }
})

axiosClient.interceptors.request.use(async(config) => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('accessTokenFD');

    return await config;
});

export default axiosClient;