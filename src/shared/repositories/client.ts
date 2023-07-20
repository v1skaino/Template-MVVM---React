import { BASE_API_PATH } from '@/shared/settings/index';
import axios, { AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: BASE_API_PATH,
});

const token = () => {
  return localStorage.getItem('@token')?.replace(/['"]+/g, '');
};

//Get Method
async function executeGet<Type>(url: string, params?: object): Promise<AxiosResponse<Type, Type>> {
  return await executeService('GET', url, params);
}

//Post Method
async function executePost<Type>(
  url: string,
  body: object | Array<object>,
  contentType?: string,
): Promise<AxiosResponse<Type, Type>> {
  return await executeService('POST', url, body, '', contentType);
}

//Put Method
async function executePut<Type>(
  url: string,
  body: object | Array<object>,
): Promise<AxiosResponse<Type, Type>> {
  return await executeService('PUT', url, body);
}

//Delete
async function executeDelete<Type>(url: string): Promise<AxiosResponse<Type, Type>> {
  return await executeService('DELETE', url);
}

function executeService<Type>(
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  url: string,
  data?: object | Array<object>,
  params?: object | string,
  contentType?: string,
): Promise<AxiosResponse<Type, Type>> {
  const headers = {
    Authorization: 'Bearer ' + token(),
    'Content-Type': contentType ?? 'application/json',
  };
  return client({
    method,
    url,
    params,
    headers,
    data,
  });
}

export { executeDelete, executeGet, executePost, executePut };
