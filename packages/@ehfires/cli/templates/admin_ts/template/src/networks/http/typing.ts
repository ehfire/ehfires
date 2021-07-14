export interface IResponse<T = any> {
  status: number;
  data?: T;
  statusText?: string;
  error?: any;
}

export class BaseResponse<T = any> {
  response: IResponse<BaseResponse<any>>;
  status = -1;
  message = "";
  data: T | undefined;
  tip: any;

  public constructor(response: IResponse) {
    this.response = response;
    if (response && response.data) {
      this.status = response.data.status;
      this.message = response.data.message;
      this.data = response.data;
    }
  }

  public resultSuccess(): boolean {
    if (this.status === 0) {
      return true;
    }
    return false;
  }
}
