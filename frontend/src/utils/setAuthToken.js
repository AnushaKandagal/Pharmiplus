import axios from 'axios'
//import api from './api';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    //localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    //localStorage.removeItem('token');
  }
};

export default setAuthToken;