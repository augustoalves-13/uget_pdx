import ProductPage from "../../../components/ProductPage"
import totem from '../../../assets/images/TotemTeste.png'


const PdxPage = () => {
  return(
    <ProductPage types={true} device={totem} product='PDX' content='A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.'/>
  )
}

export default PdxPage