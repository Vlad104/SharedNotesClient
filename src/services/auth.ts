import request from '../utils/request';
import { IUser } from './users';
import { BASE_URL } from '../common/api';

const domainUrl = `${BASE_URL}/auth`;

export const login = async (user: IUser) => {
  const result = (await request(`${domainUrl}/login`, 'POST', user)) as {
    accessToken?: string;
  };

  if (result?.accessToken) {
    localStorage.setItem('accessToken', result.accessToken);
  }

  return result;
};
