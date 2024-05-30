import axios from 'axios'
const useAxiosCommon = () => {

  const instance = axios.create({
    baseURL: 'https://server-omega-dusky.vercel.app',
  });
  return instance
};

export default useAxiosCommon;