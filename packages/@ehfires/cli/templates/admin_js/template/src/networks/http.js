import axios from "axios";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  (config) => {
    return config.data;
  },
  (error) => {
    console.log(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    console.log(error);
  }
);
