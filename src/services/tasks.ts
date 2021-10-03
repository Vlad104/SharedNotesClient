import request from '../utils/request';
import { BASE_URL } from '../common/api';

const domainUrl = `${BASE_URL}/tasks`;

export interface ITask {
  id: string;
  text: string;
}

export const getTasks = async () => {
  return request(domainUrl, 'GET');
};

export const createTask = async (task: Omit<ITask, 'id'>) => {
  return request(domainUrl, 'POST', task);
};

export const updateTask = async (task: ITask) => {
  return request(`${domainUrl}/${task.id}`, 'PUT', task);
};

export const deleteTask = async (id: string) => {
  return request(`${domainUrl}/${id}`, 'DELETE');
};
