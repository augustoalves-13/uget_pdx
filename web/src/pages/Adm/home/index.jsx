import './index.scss'
import add from '../../../assets/images/adm/icon-add.svg'
import list from '../../../assets/images/adm/icon-list.svg'
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import { useEffect } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import register from '../../../assets/images/adm/register.svg'

const HomeAdm = () => {

  const navigate = useNavigate()

  const Data = [
<<<<<<< HEAD
    {title: 'Cadastrar', icon: add,    path: '/admin/controle/produtos' },
    {title: 'Editar',    icon: list,   path: '' },
    {title: 'Listar',    icon: list,   path: '' },
  ]

  const Card = (props) => {
    return (
      <div className="card-container">
        <img src={props.img}/>
        <h2>{props.title}</h2>
=======
    { title: 'Cadastrar', image: register,    path:'/admin/controle/home'},
    { title: 'Editar',    image: register,    path: ''     },
    { title: 'Listar',    image: register,    path:'/admin/listar'     },
  ]


  const Card = (props) => {
    return (
      <div onClick={()=>navigate(props.route)} className="card-container">
        <img src={props.img} />
        <p>{props.title}</p>
>>>>>>> 768bdc98ae9a1fd0ac76f2905750a10c020ebbe0
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
<<<<<<< HEAD
            Data.map(item => (  
              <Card
                img={item.icon}
                title={item.title}
=======
            Data.map(item => (
              <Card
                route={item.path}
                title={item.title}
                img={item.image}
>>>>>>> 768bdc98ae9a1fd0ac76f2905750a10c020ebbe0
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default HomeAdm