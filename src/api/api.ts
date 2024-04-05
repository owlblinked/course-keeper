import { AxiosRequestConfig } from "axios";
import axiosInstance, { apiRequestConfig } from "./axiosConfig";

class Api {
  static get(url: string, config: Partial<AxiosRequestConfig> = {}) {
    return axiosInstance.get(url, {
      ...apiRequestConfig,
      ...config,
    });
  }

  static post(
    url: string,
    body?: any,
    config: Partial<AxiosRequestConfig> = {}
  ) {
    return axiosInstance.post(url, body, {
      ...apiRequestConfig,
      ...config,
    });
  }

  static put(
    url: string,
    body?: any,
    queryParams?: any,
    config: Partial<AxiosRequestConfig> = {}
  ) {
    return axiosInstance.put(url + queryParams, body, {
      ...apiRequestConfig,
      ...config,
    });
  }

  static delete(
    url: string,
    queryParams?: any,
    config: Partial<AxiosRequestConfig> = {}
  ) {
    return axiosInstance.delete(url + queryParams, {
      ...apiRequestConfig,
      ...config,
    });
  }
}

export default Api;
