import axios from 'axios'
import { API_URL } from './config'

const api = axios.create({
    baseURL: API_URL
})

export async function GetProductById(id){
    const resp = await api.get(`/api/produto/${id}`)
    return resp.data
}

export async function PostProduct(name, resumo, slogan, descricaoDevice, tipos){
    const resp = await api.post('/api/produto/cadastrar', {
        name:name,
        resumo: resumo,
        slogan: slogan,
        deviceDescricao: descricaoDevice,
        tipos: tipos
    })

    return resp.data
}