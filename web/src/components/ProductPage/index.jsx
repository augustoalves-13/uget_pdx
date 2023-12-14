import Header from "../header"
import './index.scss'
import SectionType from "../SectionTypes"
import Footer from "../footer"
import { useState } from "react"
import Sidebar from "../sidebar"
import { useEffect } from "react"
import { GetProductById } from "../../api/productPage"

const ProductPage = ({ types, device, product, content }) => {
  const [visible, setVisible] = useState(false)
  const [produto, setProduto] = useState([])
  const id = 5

  useEffect(() => {
    const ListProduct = async () => {
      const resp = await GetProductById(id)

      console.log(resp)
      setProduto(resp)
    }

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
          <img src={device /*  {produto.imgDevice} /*/} height={'80%'} />
        </CardProduct>
        <div className="small-content">
          <CardProduct height='38%'>
          </CardProduct>

          <CardProduct height='38%'>

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
