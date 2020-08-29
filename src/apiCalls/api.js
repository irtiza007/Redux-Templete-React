import { routes } from './apiConfig';
import axios from 'axios';

const login = async (body) => {
  try {
    const res = await axios.post(routes.LOGIN, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};

export default {
  login,
};
