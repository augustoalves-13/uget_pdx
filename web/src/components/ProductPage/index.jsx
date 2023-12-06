import Header from "../header"
import './index.scss'
import SectionType from "../SectionTypes"
import Footer from "../footer"
import { useState } from "react"
import Sidebar from "../sidebar"

const ProductPage = ({ types, device, product, content }) => {
  const [visible, setVisible] = useState(false)

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
          <h1>Sobre o {product}</h1>
          <p>{content}</p>
        </div>
      </section>
      <section className="content-product">
        <CardProduct height='80%'>
          <img src={device} height={'80%'} />
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
              <h1>Sobre o totem </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur ducimus eligendi error? Dignissimos facere corporis, culpa amet fuga a eveniet sit explicabo iste natus eaque. Assumenda itaque sint aperiam!</p>
            </div>
          </div>
          <div className="txt-container">
            <h1>Sobre o totem </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur ducimus eligendi error? Dignissimos facere corporis, culpa amet fuga a eveniet sit explicabo iste natus eaque. Assumenda itaque sint aperiam!</p>
          </div>
        </div>
      </section>
      {types &&
        <SectionType />
      }
      <Footer />
    </div>
  )
}

export default ProductPage
