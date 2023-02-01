import axios from "axios";

const instance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
});

const accessToken = localStorage.getItem("access_token");

instance.defaults.headers.common["Authorization"] = accessToken
  ? `Bearer ${accessToken}`
  : null;

export default instance;
