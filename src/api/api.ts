import axios from "axios";

const BASE_URL = "https://pomodorizer-f6ab6d5f16aa.herokuapp.com";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
