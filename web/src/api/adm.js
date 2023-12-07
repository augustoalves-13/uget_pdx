import axios from 'axios'
import { API_URL } from './config'

const api = axios.create({
  baseURL: API_URL
})

export async function LoginAdm(username, password){
  const r = await api.post('/admin/login' , {username:username, password:password})
  return r  
}

export async function RegisterProduct(title, text){
  const r = await api.post('/api/produtos/cadastrar', {
    title:title,
    text: text
  })
  return r.data
}


export async function SendImg(id, image){

  const formData = new FormData()
  formData.append('capa', image)

  const r = await api.put(`/api/produtos/${id}/image`, formData , {
    headers:{
      "Content-Type": "multipart/form-data"
    }
  })

  return r.data
}


export async function SearchImg(image){
  return `${api.getUri()}/${image}`
}

export async function ListProducts(){
  const r = await api.get('/api/produtos')
  return r.data
}

export async function ListProductsFromID(id){
  const r = await api.get('/api/produtos/'+id)
  return r.data
}