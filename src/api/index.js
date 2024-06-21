import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
// const token = process.env.REACT_APP_TOKEN;

export const setAuthToken = async (token) => {
  if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`
  },
  withCredentials: true
});

export default api;