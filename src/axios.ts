import axios from "axios";
import { axiosConfig } from "./axiosConfig";

export const googleUserInfoApi = axios.create({
  baseURL: axiosConfig.GOOGLE_API_USERINFO,
});

export const baseUrlApi = axios.create({
  baseURL: axiosConfig.BASE_URL_API,
});
