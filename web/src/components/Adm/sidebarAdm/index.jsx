import { useEffect } from 'react'
import logo from '../../../assets/images/logo.png'
import './index.scss'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import home from '../../../assets/images/adm/sidebar/icon-home.svg'
import exitIcon from '../../../assets/images/adm/sidebar/icon-exit.svg'

const SidebarAdm = () => {

  const data = [
    { id: 1, title: 'Home', path: '/admin/home', img: home, },
    { id: 2, title: 'Administrador', path: '', img: home, },
    { id: 3, title: 'Controle', path: '/admin/controle/home', img: home, },
    { id: 4, title: 'Produtos', path: '/admin/controle/produto', img: home, },
  ]

  const navigate = useNavigate()

  useEffect(() => {
    const Verify = () => {
      if (!Storage('adm-login')) {
        navigate('/admin')
      }
    }

    Verify()
  }, [])

  const Exit = () => {
    Storage('adm-login', null)
    navigate('/admin')
  }

  return (
    <div className="side-container">
      <img src={logo} />
      <div className="btn-content">
        {
          data.map(item => (
            <button className='button' onClick={() => navigate(item.path)}>
              <img src={item.img} />
              {item.title}
            </button>
          ))
        }
      </div>
      <button onClick={Exit}>
        <img src={exitIcon} />
        Sair
      </button>
    </div>
  )
}

export default SidebarAdm