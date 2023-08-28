import axios from "axios";
import { axiosConfig } from "./axiosConfig";

export const someAPI = axios.create({
  baseURL: axiosConfig.SOME_URL,
});
