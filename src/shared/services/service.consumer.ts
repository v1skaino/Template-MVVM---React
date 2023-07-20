import { BASE_API_PATH, environment } from '@/shared/settings/index';
import axios from 'axios';
import { debug } from '../utils/debug';

export const api = axios.create({
  baseURL: BASE_API_PATH,
});

const { debugError, debugSuccess } = debug;

interface ResponsePromise {
  data: object | Array<object>;
  message: string;
  status: number;
  isOk: boolean;
}

export const handleGetToken = () => {
  return localStorage.getItem('@token')?.replace(/['"]+/g, '');
};

export const serviceConsumer = {
  //Get Method
  executeGet: async function (url: string, params?: object) {
    return await this.executeService('GET', url, params);
  },

  //Post Method
  executePost: async function (url: string, body: object | Array<object>, contentType?: string) {
    return await this.executeService('POST', url, body, '', contentType);
  },

  //Put Method
  executePut: async function (url: string, body: object | Array<object>) {
    return await this.executeService('PUT', url, body);
  },

  //Delete
  executeDelete: async function (url: string) {
    return await this.executeService('DELETE', url);
  },

  executeService: function (
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    url: string,
    data?: object | Array<object>,
    params?: object | string,
    contentType?: string,
  ): Promise<ResponsePromise> {
    const headers = {
      Authorization: 'Bearer ' + handleGetToken(),
      'Content-Type': contentType ?? 'application/json',
    };

    const response = api({
      method,
      url,
      params,
      headers,
      data,
    })
      .then((res) => {
        const { data, status, statusText } = res;
        const successResponse: ResponsePromise = {
          data: data,
          status: status,
          message: statusText,
          isOk: true,
        };
        if (environment === 'dev') {
          debugSuccess('-------- DEBUG - SUCCESS - START --------');
          console.log(successResponse);
          debugSuccess('-------- DEBUG - SUCCESS - END --------');
        }
        return successResponse;
      })
      .catch((err) => {
        const { message, status } = err;
        const errorResponse: ResponsePromise = {
          data: [],
          status: status,
          message: message,
          isOk: false,
        };
        if (environment === 'dev') {
          debugError('-------- DEBUG - ERROR - START --------');
          console.log(errorResponse);
          debugError('-------- DEBUG - ERROR - END --------');
        }
        return errorResponse;
      });

    return response;
  },
};
