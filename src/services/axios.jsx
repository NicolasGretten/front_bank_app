import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
  paramsSerializer: (params) => (qs.stringify(params)),
});

export default axiosInstance;
