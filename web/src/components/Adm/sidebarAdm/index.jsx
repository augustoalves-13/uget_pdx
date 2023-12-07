import { useEffect } from 'react'
import logo from '../../../assets/images/logo.png'
import './index.scss'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

const SidebarAdm = () => {

  const data = [
    { id: 1, title: 'Home',           path: '/admin/home', img: '', },
    { id: 2, title: 'Administrador',  path: '', img: '', },
    { id: 3, title: 'Home-page',      path: '/admin/controle/home', img: '', },
    { id: 4, title: 'Produtos-page',  path: '', img: '', },
  ]

  const navigate = useNavigate()

  useEffect(()=>{
    const Verify = () =>{
      if(!Storage('adm-login')){
        navigate('/admin')
      }
    }

    Verify()
  },[])

  const Exit = () => {
    Storage('adm-login', null)
    navigate('/admin')
  }

  return (
    <div className="side-container">
      <img src={logo} />
      <div className="btn-content">
        {data.map(item => (
          <button onClick={()=>navigate(item.path)}>
            {item.title}
          </button>
        ))}
      </div>
      <button onClick={Exit}>
        Sair
      </button>
    </div>
  )
}

export default SidebarAdm