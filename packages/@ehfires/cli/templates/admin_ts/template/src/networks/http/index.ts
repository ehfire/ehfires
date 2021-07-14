import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Notification } from "element-ui";
import { BaseResponse, IResponse } from "./typing";

export default class Http {
  /**
   * @description 实例
   */
  private static instance: AxiosInstance | null = null;
  public static init(): void {
    this.instance === null &&
      (this.instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 6000,
      }));
    this.initInterceptors();
  }
  /**
   * @description 拦截器
   */
  private static initInterceptors(): void {
    if (this.instance === null) return;
    this.instance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    //请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error: any) => {
        console.log(error);
      }
    );
    //响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => {
        const { response } = error;
        if (response) {
          this.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          Notification.error("网络连接异常，请稍后重试");
        }
      }
    );
  }

  /**
   * @description 请求异常响应回调
   */
  private static errorHandle(response: any): void {
    switch (response.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        Notification.error("请求资源不存在!!!");
        break;
      default:
        Notification.error("请求链接错误!!!");
    }
  }

  /**
   * @description get请求
   */
  public static async requestForGet(
    url: string,
    params?: any
  ): Promise<BaseResponse> {
    return new Promise((resolve) => {
      if (this.instance === null) return;
      this.instance({
        method: "get",
        url: url,
        params: params,
      })
        .then((result) => {
          resolve(this.status200Response(result));
        })
        .catch((err) => {
          resolve(this.errorResponse(err));
        });
    });
  }

  /**
   * @description post请求
   */
  public static requestForPost(
    url: string,
    params?: any
  ): Promise<BaseResponse> {
    return new Promise((resolve) => {
      if (this.instance === null) return;
      this.instance({
        method: "post",
        url: url,
        data: params,
      })
        .then((result) => {
          resolve(this.status200Response(result));
        })
        .catch((err) => {
          resolve(this.errorResponse(err));
        });
    });
  }

  /**
   * @description put请求
   */
  public static requestForPut(
    url: string,
    params?: any
  ): Promise<BaseResponse> {
    return new Promise((resolve) => {
      if (this.instance === null) return;
      this.instance({
        method: "put",
        url: url,
        data: params,
      })
        .then((result) => {
          resolve(this.status200Response(result));
        })
        .catch((err) => {
          resolve(this.errorResponse(err));
        });
    });
  }

  /**
   * @description delete请求
   */
  public static requestForDelete(
    url: string,
    params?: any
  ): Promise<BaseResponse> {
    return new Promise((resolve) => {
      if (this.instance === null) return;
      this.instance({
        method: "delete",
        url: url,
        data: params,
      })
        .then((result) => {
          resolve(this.status200Response(result));
        })
        .catch((err) => {
          resolve(this.errorResponse(err));
        });
    });
  }

  private static status200Response(result: AxiosResponse<any>): BaseResponse {
    const response: IResponse = {
      status: result.status,
      data: result.data,
      statusText: result.statusText,
    };
    return new BaseResponse(response);
  }
  private static errorResponse(err: any): BaseResponse {
    const response: IResponse = {
      status: -1,
      error: err,
    };
    return new BaseResponse(response);
  }
}
