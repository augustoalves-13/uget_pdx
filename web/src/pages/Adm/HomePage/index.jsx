import { useEffect, useState } from "react"
import Container from "../../../components/Adm/Container"
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import './index.scss'
import { ListProducts, RegisterProduct, SearchImg, SendImg } from "../../../api/adm"
import { ToastContainer, toast } from "react-toastify"
import { API_URL } from "../../../api/config"
import EditModal from "../../../components/Adm/Modals/Edit"
import upload from '../../../assets/images/adm/bx_upload.svg'

const HomeController = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [editVisible, setEditVisible] = useState(false)
  const [products, setProducts] = useState([])

  const File = () => {
    document.getElementById('in-file').click()
  }

  const ShowProducts = async () => {
    const resp = await ListProducts()
    console.log(resp)
    setProducts(resp)
  }

  useEffect(() => {
    ShowProducts()
  }, [])

  const SaveProduct = async () => {
    try {
      const resp = await RegisterProduct(title, text)

      const img = await SendImg(resp.id, image)

      setTitle('')
      setImage('')
      setText('')
      toast.success('Produto adicionado a home page')
    } catch (err) {
      toast.error(err.response.data.erro)
    }
  }

  const ShowImg = () => {
    if (!image) {
      return upload
    } else {
      return URL.createObjectURL(image)
    }

  }

  return (
    <div className="adm-container">
      <SidebarAdm />
      <main className="adm-content">
        <HeaderAdm />
        <Container title='Cadastrar'>
          <section className="content-container">
            <div onClick={File} className="file">

              <img className="file-img" src={ShowImg()} />

              <input type="file" id="in-file" onChange={e => setImage(e.target.files[0])} />
            </div>
            <div className="in-container">
              <div className="in-content">
                <label>Nome:</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="in-content">
                <label>Resumo:</label>
                <textarea value={text} onChange={e => setText(e.target.value)} cols="30" rows="10"></textarea>
              </div>
              <button onClick={SaveProduct}>Salvar</button>
            </div>

          </section>
        </Container>
        <Container title='Lista de Produtos'>
          <section className="list-container">
            <div className="input-view">

            </div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Resumo</th>
                </tr>
              </thead>
              <tbody>
                {products.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <img src={API_URL + '/' + item.img} />
                    </td>
                    <td>{item.title}</td>
                    <td>...</td>


                    <td>
                      <button onClick={() => setEditVisible(item.id)}></button>
                      <button></button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </section>
        </Container>
      </main>
      {editVisible &&
        <EditModal id={editVisible} />
      }
      <ToastContainer />
    </div>
  )
}

export default HomeController