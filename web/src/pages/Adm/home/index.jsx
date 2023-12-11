import './index.scss'
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import { useEffect } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import register from '../../../assets/images/adm/register.svg'

const HomeAdm = () => {

  const navigate = useNavigate()

  const Data = [
    { title: 'Cadastrar', image: register,    path:'/admin/controle/home'},
    { title: 'Editar',    image: register,    path: ''     },
    { title: 'Listar',    image: register,    path:'/admin/listar'     },
  ]


  const Card = (props) => {
    return (
      <div onClick={()=>navigate(props.route)} className="card-container">
        <img src={props.img} />
        <p>{props.title}</p>
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
                route={item.path}
                title={item.title}
                img={item.image}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default HomeAdm