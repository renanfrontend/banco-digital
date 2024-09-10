import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://seu-backend/api'; // Substitua pela URL do seu backend

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return jwt_decode(token);
  }
  return null;
};

export default {
  login,
  logout,
  getCurrentUser
};