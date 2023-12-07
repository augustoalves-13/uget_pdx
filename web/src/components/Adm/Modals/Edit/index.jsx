import { useEffect, useState } from 'react'
import Container from '../../Container'
import './index.scss'
import { ListProductsFromID, SearchImg } from '../../../../api/adm'
import { API_URL } from '../../../../api/config'

const EditModal = (props) => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const File = () => {
    document.getElementById('in-file').click()
  }

  useEffect(()=>{

    const ShowProduct = async () => {
      const resp = await ListProductsFromID(props.id)
      console.log(resp)
      setTitle(resp.title)
      setText(resp.text)
      setImage(resp.img)
    }

    ShowProduct()

  },[])

  const SaveProduct = () => {

  } 

  
  const ShowImg = () => {
    if (typeof (image) === 'object') {
      return URL.createObjectURL(image)
    } else {
      return SearchImg(image)
    }
  }
  
  return(
    <div className="edit-container">
      <Container title='Editar'>
      <section className="content-container">
            <div onClick={File} className="file">
              {!image &&
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <path d="M23.375 31.875H27.625V19.125H34L25.5 8.5L17 19.125H23.375V31.875Z" fill="#888888" />
                  <path d="M42.5 38.25H8.5V23.375H4.25V38.25C4.25 40.5939 6.15612 42.5 8.5 42.5H42.5C44.8439 42.5 46.75 40.5939 46.75 38.25V23.375H42.5V38.25Z" fill="#888888" />
                </svg>
              }
              {image &&
                <img className="file-img" src={API_URL +'/'+ image} />
              }
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
    </div>
  )
}

export default EditModal