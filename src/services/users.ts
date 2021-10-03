import request from '../utils/request';
import { BASE_URL } from '../common/api';

const domainUrl = `${BASE_URL}/users`;

export interface IUser {
  login: string;
  password: string;
}

export const createUser = async (user: IUser) => {
  if (!user) {
    return;
  }

  return request(domainUrl, 'POST', user);
};
