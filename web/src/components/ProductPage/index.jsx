import Header from "../header"
import totem from '../../assets/images/TotemTeste.png'
import './index.scss'
import SectionType from "../SectionTypes"

const ProductPage = ({ types }) => {

  const CardProduct = (props) => {
    return (
      <div style={{ height: props.height }} className="container-product">
        {props.children}
      </div>
    )
  }

  return (
    <div className="product-container">
      <Header />
      <section className="banner-produto">
        {/*/ IMAGEM QUE REPRESENTE O PRODUTO /*/}
      </section>
      <section className="content-product">
        <CardProduct height='80%'>
          <img src={totem} height={'80%'} />
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

          </div>
          <div className="txt-container">
            <h1>Sobre o totem </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur ducimus eligendi error? Dignissimos facere corporis, culpa amet fuga a eveniet sit explicabo iste natus eaque. Assumenda itaque sint aperiam!</p>
          </div>
        </div>
      </section>
      <SectionType />
    </div>
  )
}

export default ProductPage
