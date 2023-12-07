import { useEffect, useState } from 'react'
import './index.scss'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

const HeaderAdm = () => {
  const [name, setName] = useState('Carregando...')

  const navigate = useNavigate()

  useEffect(() => {

    const InfoAdm = () => {
      if (!Storage('adm-login')) {
        navigate('/admin')
      } else {
        const admin = Storage('adm-login').data
        setName(admin.username)
      }
    }

    setTimeout(() => {
      InfoAdm()
    }, 1000)

  }, [])
  

  return (
    <nav className="hdr-container">
      <p>Seja bem-vindo {name[0].toUpperCase()}{name.slice(1)}</p>
      <div className="user-radio">
        {name[0].toUpperCase()}
      </div>
    </nav>
  )
}

export default HeaderAdm