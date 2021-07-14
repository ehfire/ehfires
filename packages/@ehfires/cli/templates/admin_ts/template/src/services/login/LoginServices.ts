/**
 * @package Login模块
 */
import { Http } from "@/networks";
import { BaseResponse } from "@/networks/http/typing";
import { registerResult, listResult } from "./typing/user";

export class LoginServices {
  private static _mInstance: LoginServices | null = null; //实例化
  public static get instance(): LoginServices {
    this._mInstance === null && (this._mInstance = new LoginServices());
    return this._mInstance;
  }

  /**
   * @describe 注册
   * @param username
   * @param password
   * @returns registerResult
   */
  public async register(
    username: string,
    password: string
  ): Promise<Partial<registerResult>> {
    const url = "http://127.0.0.1:3000/users/register";
    const result: BaseResponse = await Http.requestForPost(url, {
      username,
      password,
    });
    const data: registerResult = {
      status: false,
      msg: result.message,
    };
    return data;
  }

  /**
   * @describe 获取列表
   * @returns listResult[]
   */
  public async getList(): Promise<Partial<listResult[]>> {
    const url = "http://127.0.0.1:3000/users/customerList";
    const result: BaseResponse = await Http.requestForGet(url);
    const data: listResult[] = [];
    if (result.resultSuccess()) {
      for (let i = 0, len = result.data.list.length; i < len; i++) {
        data.push({
          name: result.data.list[i].name,
          value: result.data.list[i].value,
          address: result.data.list[i].address,
        });
      }
      return data;
    }
    return data;
  }
}
