import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { getSidebarStatus, setSidebarStatus } from "@/global/utils/cookies";
import store from "@/stores";

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements AppState {
  public sidebar = {
    opened: getSidebarStatus() !== "closed",
    withoutAnimation: false,
  };

  public device = DeviceType.Desktop;

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened;
    this.sidebar.withoutAnimation = withoutAnimation;
    if (this.sidebar.opened) {
      setSidebarStatus("opened");
    } else {
      setSidebarStatus("closed");
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false;
    this.sidebar.withoutAnimation = withoutAnimation;
    setSidebarStatus("closed");
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device;
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation);
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation);
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device);
  }
}

export const AppModule = getModule(App);
