import './index.scss'
import Header from "../../components/header"
import SectionHome from '../../components/sectionHome'
import Banner from '../../components/banner'
import img from '../../assets/images/logo.png'
import Sidebar from '../../components/sidebar'
import { useState } from 'react'

const HomePage = () => {
  const [ sideVisible, setSideVisible ] = useState(false)


  const data = [
    {
      title: 'PDX',
      content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
      img: '',
      direction: true,
      background: '#fff'
    },
    {
      title: 'PDV',
      content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
      img: '',
      direction:  false,
      background: '#f8f8f8'
    },
    {
      title: 'NOTES',
      content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
      img: '',
      direction: true,
      background: '#fff'
    },
    {
      title: 'ACCESS ID',
      content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
      img: '',
      direction:  false,
      background: '#f8f8f8'
    },
    {
      title: 'DONATION',
      content: 'A uGet PDX é uma solução inovadora para a gestão e operação automatizado de A&B  em eventos, praças de alimentação, feiras arenas shows e clubes.',
      img: '',
      direction: true,
      background: '#fff'
    },
  ]

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
          txt={item.content}
          background={item.background}
          direction={item.direction}
        />
      ))}
    </div>
  )
}

export default HomePage