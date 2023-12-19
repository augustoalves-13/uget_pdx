import './index.scss'
import add from '../../../assets/images/adm/icon-add.svg'
import list from '../../../assets/images/adm/icon-list.svg'
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import register from '../../../assets/images/adm/register.svg'
import RouteModal from '../../../components/Adm/Modals/RouteModal'

const HomeAdm = () => {
  const [modalVisible, setModalVisible] = useState()
  const navigate = useNavigate()

  const Data = [
    {title: 'Cadastrar', icon: add,    path: '/admin/controle/produtos' },
    {title: 'Editar',    icon: list,   path: '' },
    {title: 'Listar',    icon: list,   path: '' },
  ]

  const Card = (props) => {
    return (
      <div onClick={props.onClick} className="card-container">
        <img src={props.img}/>
        <h2>{props.title}</h2>
      </div>
    )
  }

  useEffect(() => {
    const VerifyLogin = () => {
      if (!Storage('adm-login')) {
        navigate('/admin')
      }
    }

    VerifyLogin()
  }, [])

  return (
    <div className="adm-container">
      <SidebarAdm />
      <main className="adm-content">
        <HeaderAdm />
        <h1>O que você deseja?</h1>
        <div className="card-section">
          {
            Data.map(item => (  
              <Card
                onClick={()=>setModalVisible(item.title)}
                img={item.icon}
                title={item.title}
              />
            ))
          }
        </div>
      </main>
      {modalVisible &&
        <RouteModal visible={setModalVisible}/>
      }
    </div>
  )
}

export default HomeAdm