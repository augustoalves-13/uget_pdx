import './index.scss'
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import HeaderAdm from "../../../components/Adm/headerAdm"
import Container from "../../../components/Adm/Container"
import { PostProduct, SaveImages } from '../../../api/productPage'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ModalSections from '../../../components/Adm/Modals/SectionsAdm'
import upload from '../../../assets/images/adm/bx_upload.svg'


const ProductPage = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [nome, setNome] = useState('')
    const [resumo, setResumo] = useState('')
    const [slogan, setSlogan] = useState('')
    const [sobreDevice, setSobreDevice] = useState('')
    const [imagem1, setImagem1] = useState('')
    const [imagem2, setImagem2] = useState('')
    const [imagem3, setImagem3] = useState('')


    const AddProduct = async () => {
        try {
            const resp = await PostProduct(nome, resumo, slogan, sobreDevice)
            const ImagePost = await SaveImages(resp.id , imagem1, imagem2, imagem3)

            console.log(resp.id)

            toast.success('Nova Página adicionada com sucesso')
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    const openFiles = (id) => {
        document.getElementById(id).click()
    }

    function ShowImage(image) {
        if (!image) {

            return upload

        } else {
            return URL.createObjectURL(image) 
        }
    }

    return (
        <div className="adm-container">
            <SidebarAdm />
            <div className="adm-content">
                <HeaderAdm />
                <Container title='Nova Pagina Produto'>
                    <section className="add-container">
                        <div className="in-container">
                            <div className="in-content">
                                <label>Nome do produto:</label>
                                <input type="text" onChange={e => setNome(e.target.value)} />
                            </div>
                            <div className="in-content">
                                <label>Resumo:</label>
                                <textarea onChange={e => setResumo(e.target.value)} ></textarea>
                            </div>
                            <button onClick={() => setModalVisible(true)} className='more-button'>+</button>
                            <button onClick={AddProduct}>Salvar</button>
                        </div>
                        <div className="in-container">
                            <div className="in-content">
                                <label>Slogan:</label>
                                <input type="text" onChange={e => setSlogan(e.target.value)} />
                            </div>
                            <div className="in-content">
                                <label>Sobre o device:</label>
                                <textarea onChange={e => setSobreDevice}></textarea>
                            </div>
                        </div>
                        <div
                            className="file"
                            onClick={() => {
                                openFiles('file1')
                            }}
                        >
                            <img className='file-img' src={ShowImage(imagem1)} />
                            <input id='file1' type="file" onChange={e => setImagem1(e.target.files[0])} />
                        </div>
                        <div
                            className="file"
                            onClick={() => {
                                openFiles('file2')
                            }}
                        >
                            <img className='file-img' src={ShowImage(imagem2)} />
                            <input id='file2' type="file" onChange={e => setImagem2(e.target.files[0])} />
                        </div>
                        <div
                            className="file"
                            onClick={() => {
                                openFiles('file3')
                            }}
                        >
                            <img className='file-img' src={ShowImage(imagem3)} />
                            <input id='file3' type="file" onChange={e => setImagem3(e.target.files[0])} />
                        </div>
                    </section>
                </Container>
            </div>
            {modalVisible &&
                <ModalSections onClose={setModalVisible} />
            }
            <ToastContainer />
        </div>
    )
}

export default ProductPage