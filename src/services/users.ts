import request from '../utils/request';

const baseUrl = 'http://localhost:4000';
const domainUrl = `${baseUrl}/users`;

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
