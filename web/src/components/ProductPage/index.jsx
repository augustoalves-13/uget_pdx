import Header from "../header"
import './index.scss'
import SectionType from "../SectionTypes"
import Footer from "../footer"
import { useState } from "react"
import Sidebar from "../sidebar"
import { useEffect } from "react"
import { GetImagesById, GetProductById } from "../../api/productPage"
import { API_URL } from "../../api/config"

const ProductPage = ({ types, device, product, content }) => {
  const [visible, setVisible] = useState(false)
  const [produto, setProduto] = useState([])
  const [imagem1, setImagem1] = useState([])
  const [imagem2, setImagem2] = useState()
  const [imagem3, setImagem3] = useState()
  const id = 2

  const getImages =  async() => {
    try {
      const resp = await GetImagesById(id)
      setImagem1(API_URL +'/'+resp[0].img)
      setImagem2(API_URL +'/'+resp[1].img)
      setImagem3(API_URL +'/'+resp[2].img)
    } catch (err) {
      console.log(err)
    }
  } 


  useEffect(() => {
    const ListProduct = async () => {
      const resp = await GetProductById(id)

      console.log(resp)
      setProduto(resp)
    }
    getImages()
    ListProduct()
  }, [])

  const CardProduct = (props) => {
    return (
      <div style={{ height: props.height }} className="container-product">
        {props.children}
      </div>
    )
  }


  return (
    <div className="product-container">
      <Header
        class={visible}
        onClick={() => setVisible(!visible)}
      />
      <Sidebar visible={visible} />
      <section className="banner-produto">
        <div className="txt-container">
          <h1>Sobre o {produto.name}</h1>
          <p>{produto.resumo}</p>
        </div>
      </section>
      <section className="content-product">
        <CardProduct height='80%'>
          <img src={imagem1} height={'80%'} />
        </CardProduct>
        <div className="small-content">
          <CardProduct height='38%'>
          </CardProduct>

          <CardProduct height='38%'>
            <img height={120} src={imagem2}/>
          </CardProduct>
        </div>
      </section>
      <section className="product-device">
        <div className="content-device">
          <div className="radius-device">
            <div className="txt-hidden">
              <h1>Sobre o totem {produto.name}</h1>
              <p>{produto.deviceDescricao}</p>
            </div>
            <img src={imagem3}/>
          </div>
          <div className="txt-container">
            <h1>Sobre o totem {produto.name}</h1>
            <p>{produto.deviceDescricao}</p>
          </div>
        </div>
      </section>
      {produto.tipos !== 0 &&
        <SectionType />
      }
      <Footer />
    </div>
  )
}

export default ProductPage
