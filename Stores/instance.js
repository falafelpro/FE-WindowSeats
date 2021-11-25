import axios from "axios";

//export const baseURL = "http://10.0.0.6:8000"; // Hussain

// export const baseURL = "http://192.168.3.14:8001"; // Shahad

//export const baseURL = "http://192.168.8.166:8001"; // Shahad

// export const baseURL = "http://192.168.1.140:8000"; // Nawaf

//export const baseURL = "http://192.168.100.139:8000"; // Nawaf work


export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
