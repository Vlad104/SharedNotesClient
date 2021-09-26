import request from '../utils/request';
import { IUser } from './users';

const baseUrl = 'http://localhost:4000';
const domainUrl = `${baseUrl}/auth`;

export const login = async (user: IUser) => {
  return request(`${domainUrl}/login`, 'POST', user);
};

export const check = async () => {
  return request(`${domainUrl}/check`, 'GET');
};
