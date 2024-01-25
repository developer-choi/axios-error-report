import './App.css';
import {useCallback} from 'react';
import axios from 'axios';

function App() {
  const onClick = useCallback(() => {
    axiosInstance.get('/v2/list.json').catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <button onClick={onClick}>Click ME</button>
  );
}

const axiosInstance = axios.create({
  baseURL: 'https://api.apis.guru'
});

axiosInstance.interceptors.response.use(function (response) {
  return Promise.reject(response);
}, function (error) {
  return error;
});

export default App;
