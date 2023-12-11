import { ToastContainer } from "react-toastify"
import Container from "../../../components/Adm/Container"
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import { useEffect, useState } from "react"
import { ListProductsFromID, SearchImg } from "../../../api/adm"
import { API_URL } from "../../../api/config"

const EditPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [editVisible, setEditVisible] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const LoadProductInfo = async () => {
      const resp = await ListProductsFromID(1)

      setImage(resp.img)
      setTitle(resp.title)
      setText(resp.text)
    }
 
    LoadProductInfo()
  },[])


  const File = () => {
    document.getElementById('in-file').click()
  }

  const handleImage = () => { 
    if (typeof (image) === 'object') {
      return URL.createObjectURL(image)
    } else {
      return SearchImg(image)
    }
  }

  return (
    <div className="adm-container">
      <SidebarAdm />
      <main className="adm-content">
        <HeaderAdm />
        <Container title='Editar'>
          <section className="content-container">
            <div onClick={File} className="file">
              {image &&
                <img className="file-img" src={handleImage()} />
              }
              <input type="file" id="in-file" onChange={handleImage} />
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
              <button onClick={'SaveProduct'}>Salvar</button>
            </div>

          </section>
        </Container>
        </main>
        <ToastContainer />
    </div>
  )
}

export default EditPage