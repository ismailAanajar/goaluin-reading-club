import axios from 'axios';

// prettier-ignore

// prettier-ignore





const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
// customAxios.defaults.withCredentials = true;
// customAxios.defaults.withCredentials = false;
customAxios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = 'Bearer ' +  localStorage?.getItem('token');
    // config.headers['Access-Control-Allow-Credentials'] = '*';
    // config.headers['X-API-KEY'] = process.env.API_KEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
    
  },
  );
  
  customAxios.interceptors.response.use(
    function (response) {
    return response;
  },
  function (error) {
    
    return Promise.reject(error);
  },
  );
  


export default customAxios;