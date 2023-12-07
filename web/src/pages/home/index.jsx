import './index.scss'
import Header from "../../components/header"
import SectionHome from '../../components/sectionHome'
import Banner from '../../components/banner'
import img from '../../assets/images/logo.png'
import Sidebar from '../../components/sidebar'
import { useEffect, useState } from 'react'
import { ShowProducts } from '../../api/product'

const HomePage = () => {
  const [sideVisible, setSideVisible ] = useState(false)
  const [data, setData] = useState([])

  //const data = [
  //  {
  //    title: 'PDX',
  //    content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
  //    img: '',
  //    direction: true,
  //    background: '#fff'
  //  },
  //  {
  //    title: 'PDV',
  //    content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
  //    img: '',
  //    direction:  false,
  //    background: '#f8f8f8'
  //  },
  //  {
  //    title: 'NOTES',
  //    content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
  //    img: '',
  //    direction: true,
  //    background: '#fff'
  //  },
  //  {
  //    title: 'ACCESS ID',
  //    content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
  //    img: '',
  //    direction:  false,
  //    background: '#f8f8f8'
  //  },
  //  {
  //    title: 'DONATION',
  //    content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
  //    img: '',
  //    direction: true,
  //    background: '#fff'
  //  },
  //]

  useEffect(()=>{
    const ListProduct = async () => {
      const resp = await ShowProducts()
      console.log(resp)
      setData(resp)
    }

    ListProduct()
  },[])

  return (
    <div className="main-container">
      <Header 
        class={sideVisible}
        onClick={()=>setSideVisible(!sideVisible)}
      />
      <Sidebar
        visible={sideVisible}
      />
      <Banner
        img={img}
        txt='Somos uma holding de empresas de com soluções em tecnologia, automação e inteligência.
        Atuamos no segmento de varejo, “food services”, eventos, entreterimento, empresas de serviço, segurança e organizações; '
      />
      {data.map(item => (
        <SectionHome
          title={item.title}
          txt={item.text}
          image={item.img}
        />
      ))}
    </div>
  )
}

export default HomePage