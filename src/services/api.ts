import axios from 'axios';
import { User } from '../types/user';

export const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 用户接口
export const login = (credentials: { email: string; password: string }) =>
  api.post('/auth/login', credentials);

export const userApi ={
  createUser : (userData: User) =>api.post('/users', userData),
  updateUser: (id: string, userData: User) => api.put(`/users/${id}`, userData),
}