import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL
})

export async function CreateSlider(title , text){
  const r = await api.post('/api/slider/cadastrar' , {
    title: title,
    txt: text
  })

  return r.data
}

export async function PutSliderImage(id, image){
  const formData = new FormData()
  formData.append('slider' , image)

  const r = await api.put(`/api/slider/${id}/image`, formData , {
    headers:{ 
      "Content-Type": "multipart/form-data"
    }
  })

  return r.data
}

export async function ListSliderProducts(){
  const r = await api.get('/api/slider')
  return r.data
}