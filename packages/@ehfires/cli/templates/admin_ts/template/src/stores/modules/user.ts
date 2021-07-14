import {
  Module,
  VuexModule,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";

import store from "@/stores";
import { getToken } from "@/global/utils/cookies";

export interface UserState {
  token: string;
  name: string;
}

@Module({ dynamic: true, name: "user", store })
class User extends VuexModule implements UserState {
  token = getToken() || "";

  name = "";

  @Mutation
  SET_TOKEN(token: string) {
    this.token = token;
  }

  @Action
  async Login(userInfo: { username: string; password: string }) {
    const { password } = userInfo;

    let { username } = userInfo;
    username = username.trim();
    console.log(username, password);
    this.SET_TOKEN("test");
  }
}

export const UserModule = getModule(User);
