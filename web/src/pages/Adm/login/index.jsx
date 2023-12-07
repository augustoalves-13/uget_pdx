import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react'
import './index.scss'
import "react-toastify/dist/ReactToastify.css";
import { LoginAdm } from '../../../api/adm'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [carregando, setCarregando] = useState(false)

  const ref = useRef()
  const navigate = useNavigate()

  const Login = async () => {
    ref.current.continuousStart()
    setCarregando(true)

    try {
      const resp = await LoginAdm(username, password)

      Storage('adm-login', resp)

      setTimeout(()=>{
        navigate('/admin/home')
      }, 3000)
      
    } catch (err) {
      setCarregando(false)
      ref.current.complete()
      toast.error(err.response.data.erro)
    }
  }

  return (
    <main className="login-main">
      <LoadingBar
        ref={ref}
        color='#f11946'
        height={4}
      />
      <div className="content-login">
        <div className="input-container">
          <label>Nome de usuário</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Senha:</label>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button disabled={carregando} onClick={Login}>Entrar</button>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

export default LoginPage