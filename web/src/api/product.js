import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL  
})  

export async function ShowProducts(){
  const r = await api.get('/api/produtos/')
  return r.data
}