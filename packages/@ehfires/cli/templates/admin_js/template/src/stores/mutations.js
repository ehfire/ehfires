/**
 * @package mutation
 */
import * as type from "./types";
export default {
  [type._ISLOGIN]: (state, isLogin) => {
    state.isLogin = isLogin;
  },
  [type._UICOLLAPSE]: (state, uiCollapse) => {
    state.uiCollapse = uiCollapse;
  },
};
