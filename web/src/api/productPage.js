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

export async function SaveImages(id, imagem1, imagem2, imagem3){
    const form = new FormData()
    form.append('imagens', imagem1)
    form.append('imagens', imagem2)
    form.append('imagens', imagem3)

    const r = await api.put('/admin/produto/' + id , form , {
        headers:{
            "Content-Type": 'multipart/form-data'
        }
    })

    return r.data
}

export async function GetImagesById(id){
    const r = await api.get(`/admin/produto/${id}/imagens`)
    return r.data
}