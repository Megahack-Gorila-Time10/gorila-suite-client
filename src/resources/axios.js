import axios from "axios";

const server = (url) => {
  return axios.create({
    baseURL: url,
    withCredentials: false,
  });
};

export default server;
