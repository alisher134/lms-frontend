import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: AxiosRequestConfig }
  : { params: Params; config?: AxiosRequestConfig };
