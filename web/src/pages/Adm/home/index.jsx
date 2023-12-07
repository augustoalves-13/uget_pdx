import './index.scss'
import HeaderAdm from "../../../components/Adm/headerAdm"
import SidebarAdm from "../../../components/Adm/sidebarAdm"
import { useEffect } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

const HomeAdm = () => {

  const navigate = useNavigate()

  const Card = () => {
    return (
      <div className="card-container">

      </div>
    )
  }

  useEffect(()=>{
    const VerifyLogin = () => {
      if(!Storage('adm-login')){
        navigate('/admin')
      }
    }

    VerifyLogin()
  },[])

  return (
    <div className="adm-container">
      <SidebarAdm />
      <main className="adm-content">
        <HeaderAdm />
        <h1>O que você deseja?</h1>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  )
}

export default HomeAdm