import axios from 'axios';

const fetchData = () => {
  return axios.get('http://localhost:8080/showAdmin')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    });
};

export default fetchData;
