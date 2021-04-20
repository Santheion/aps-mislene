import axios from 'axios';

async function axiosGetAll() {
  const axiosService = axios.create({
    baseURL: 'http://localhost:8080/'
  })
  const response = await axiosService.get('items');
  return response.data;
}


export default axiosGetAll;
