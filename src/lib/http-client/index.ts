import type { HTTPClientBuilder } from "./HTTPClient";
import type { RequestInterceptor, ResponseInterceptor } from "./AxiosClient";
import { AxiosClientBuilder } from "./AxiosClientBuilder";

const requestInterceptor: RequestInterceptor = {
  async onFulfilled(config) {
    // 토큰 설정
    const token = localStorage.getItem("token");
    if (!token) return config;

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  onRejected(error) {
    return Promise.reject(error);
  },
};

const responseInterceptor: ResponseInterceptor = {
  async onFulfilled(response) {
    return response;
  },
  async onRejected(error) {
    return Promise.reject(error);
  },
};

export function createHttpCilent(): HTTPClientBuilder {
  const builder: AxiosClientBuilder = new AxiosClientBuilder();
  return builder
    .setRequestInterceptor({
      onFulfilled: requestInterceptor.onFulfilled.bind(builder),
      onRejected: requestInterceptor.onRejected.bind(builder),
    })
    .setResponseInterceptor({
      onFulfilled: responseInterceptor.onFulfilled.bind(builder),
      onRejected: responseInterceptor.onRejected.bind(builder),
    });
}
