import axios from "axios";
import { APIError } from "./error";
import { getAuthToken } from "../client/token-utils";

export const Axios = axios.create({
    baseURL: 'https://ecommerce.routemisr.com/api/v1',
});

Axios.interceptors.request.use((config) => {
    config.headers.Apipassword = '@#$trans@#$GENIO';
    config.headers.Authorization = `Bearer ${getAuthToken()}`;
    return config;
});
export class HttpClient {
  static async get(url, params) {
    try {
      const response = await Axios.get(url, params);
      
      return response.data;
    } catch (error) {
      throw new APIError(error?.response?.data);
    }
  }

  static async post(
    url,
    data,
    config,
  ) {
    try {
      const response = await Axios.post(url, data, config);                          
      return response.data;
    } catch (error) {                              
      throw new APIError(error?.response?.data);
    }
  }

  static async put(url, data) {
    try {
      const response = await Axios.put(url, data);
      return response.data;
    } catch (error) {
      throw new APIError(error?.response?.data);
    }
  }

  static async patch(
    url,
    data,
    config,
  ) {
    try {
      const response = await Axios.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw new APIError(error?.response?.data);
    }
  }

  static async delete(url, config) {
    try {
      const response = await Axios.delete(url, config);
      
      return response.data;
    } catch (error) {
      
      throw new APIError(error?.response?.data);
    }
  }
}
