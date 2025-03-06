import { ApiClientInterface } from "./api_interface";
import AxiosClient from "./axios";

interface ConfigParams {
  responseType?: any;
  contentType?: string;
  authorization?: string;
  activeUrl?: string | null;
}

export class ApiClient implements ApiClientInterface {
  async post(url: string, data: any, config?: ConfigParams) {
    return await AxiosClient({
      config: {
        ...config,
      },
    }).post(url, data, {
      responseType: config?.responseType ?? "json",
      // headers: {
      //   'Content-Type': config?.contentType ?? 'application/json',
      // }
    });
  }

  async get(url: string, data: any, config?: ConfigParams) {
    return await AxiosClient({
      config: {
        ...config,
      },
    }).get(url, data);
  }

  async put(url: string, data: any, config?: ConfigParams) {
    return await AxiosClient({
      config: {
        ...config,
      },
    }).put(url, data);
  }

  async delete(url: string, data: any, config?: ConfigParams) {
    return await AxiosClient({
      config: {
        ...config,
      },
    }).delete(url, { data });
  }

  async patch(url: string, data: any, config?: ConfigParams) {
    return await AxiosClient({
      config: {
        ...config,
      },
    }).patch(url, data);
  }
}
