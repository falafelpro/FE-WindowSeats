import axios from "axios";

export const baseURL = "http://10.0.0.6:8000"; // Hussain

// export const baseURL = "http://192.168.3.14:8001"; // Shahad

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
