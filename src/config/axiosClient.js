import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
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