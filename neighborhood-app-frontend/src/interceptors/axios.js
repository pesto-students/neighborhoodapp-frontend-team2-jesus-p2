import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8080/';

// const axiosJWT = axios.create();

// Request interceptor for API calls
// axios.interceptors.request.use(
//     async config => {
//       const response = await axios.get('token');
//       //const keys = JSON.parse(value)
//       config.headers = { 
//         'Authorization': `Bearer ${response.access_token}`,
//       }
//       return config;
//     },
//     error => {
//       Promise.reject(error)
// });

axios.interceptors.response.use(resp => resp,async error => {
    if(error.response.status === 401 || error.response.status === 403){
        const response = await axios.get('token');
        if(response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            return axios(error.config)
        }
    }
    return error;
})