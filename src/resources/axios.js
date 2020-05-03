import axios from "axios";

const server = (url) => {
  return axios.create({
    baseURL: url,
    withCredentials: true,
  });
};

export default server;
