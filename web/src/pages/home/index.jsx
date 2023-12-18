import './index.scss'
import Header from "../../components/header"
import SectionHome from '../../components/sectionHome'
import Banner from '../../components/banner'
import img from '../../assets/images/logo.png'
import Sidebar from '../../components/sidebar'
import { useEffect, useState } from 'react'
import { ShowProducts } from '../../api/product'

const HomePage = () => {
  const [sideVisible, setSideVisible] = useState(false)
  const [data, setData] = useState([])

  const reverse = (e) => {
    return e % 2 === 0 ? 'row-reverse' : 'row'
  }

  useEffect(() => {
    const ListProduct = async () => {
      const resp = await ShowProducts()
      console.log(resp)
      setData(resp)
    }

    ListProduct()
  }, [])

  return (
    <div className="main-container">
      <Header
        class={sideVisible}
        onClick={() => setSideVisible(!sideVisible)}
      />
      <Sidebar
        visible={sideVisible}
      />
      <Banner
        img={img}
        txt='Somos uma holding de empresas de com soluções em tecnologia, automação e inteligência.
        Atuamos no segmento de varejo, “food services”, eventos, entreterimento, empresas de serviço, segurança e organizações; '
      />
      {
        data.map(item => (
          <SectionHome
            direction={reverse(item.id)}
            title={item.title}
            txt={item.text}
            image={item.img}
          />
        ))
      }
    </div>
  )
}

export default HomePage