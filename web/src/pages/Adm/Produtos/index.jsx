import './index.scss'
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import HeaderAdm from "../../../components/Adm/headerAdm"
import Container from "../../../components/Adm/Container"
import { PostProduct } from '../../../api/productPage'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ModalSections from '../../../components/Adm/Modals/SectionsAdm'

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

            toast.success('Nova Página adicionada com sucesso')
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    const openFiles = (id) => {
        document.getElementById(id).click()
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
                            <button onClick={()=> setModalVisible(true)} className='more-button'>+</button>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M23.375 31.875H27.625V19.125H34L25.5 8.5L17 19.125H23.375V31.875Z" fill="#888888" />
                                <path d="M42.5 38.25H8.5V23.375H4.25V38.25C4.25 40.5939 6.15612 42.5 8.5 42.5H42.5C44.8439 42.5 46.75 40.5939 46.75 38.25V23.375H42.5V38.25Z" fill="#888888" />
                            </svg>
                            <input id='file1' type="file" onChange={e => setImagem1(e.target.files[0])} />
                        </div>
                        <div
                            className="file"
                            onClick={() => {
                                openFiles('file2')
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M23.375 31.875H27.625V19.125H34L25.5 8.5L17 19.125H23.375V31.875Z" fill="#888888" />
                                <path d="M42.5 38.25H8.5V23.375H4.25V38.25C4.25 40.5939 6.15612 42.5 8.5 42.5H42.5C44.8439 42.5 46.75 40.5939 46.75 38.25V23.375H42.5V38.25Z" fill="#888888" />
                            </svg>
                            <input id='file2' type="file" onChange={e => setImagem2(e.target.files[0])} />
                        </div>
                        <div
                            className="file"
                            onClick={() => {
                                openFiles('file3')
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M23.375 31.875H27.625V19.125H34L25.5 8.5L17 19.125H23.375V31.875Z" fill="#888888" />
                                <path d="M42.5 38.25H8.5V23.375H4.25V38.25C4.25 40.5939 6.15612 42.5 8.5 42.5H42.5C44.8439 42.5 46.75 40.5939 46.75 38.25V23.375H42.5V38.25Z" fill="#888888" />
                            </svg>
                            <input id='file3' type="file" onChange={e => setImagem3(e.target.files[0])} />
                        </div>
                    </section>
                </Container>
            </div>
            {modalVisible &&
                <ModalSections onClose={setModalVisible}/>
            }
            <ToastContainer />
        </div>
    )
}

export default ProductPage