import { useState } from 'react'
import { CreateSlider, PutSliderImage } from '../../../api/slider'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify'
import HeaderAdm from '../../../components/Adm/headerAdm'
import SidebarAdm from '../../../components/Adm/sidebarAdm'
import upload from '../../../assets/images/adm/bx_upload.svg'
import Container from '../../../components/Adm/Container/index'

const SliderControlle = () => {
  const [title, setTitle] = useState('')
  const [txt, setTxt] = useState('')
  const [image, setImage] = useState(null)

  const PostSlider = async () => {
    try {
      const resp = await CreateSlider(title, txt)
      const imgSend = await PutSliderImage(image, resp.id )

      toast.success('Produto cadastrado com sucesso')
    } catch (err) {
      console.log(err)
    }
  }

  const ShowImg = () => {
    if (!image) {
      return upload
    } else {
      return URL.createObjectURL(image)
    }
  }

  const File = () => {
    document.getElementById('in-file').click()
  }

  return (
    <div className="adm-container">
      <SidebarAdm />
      <main className="adm-content">
        <HeaderAdm />
        <Container title='Casdastrar novo slider'>
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
                <textarea value={txt} onChange={e => setTxt(e.target.value)} cols="30" rows="10"></textarea>
              </div>
              <button onClick={PostSlider}>Salvar</button>
            </div>
          </section>
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}

export default SliderControlle