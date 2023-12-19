
import { useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const RouteModal = (props) => {
  const [route, setRoute] = useState(props.data)

  const navigate = useNavigate()

  const data = [
    {title: `Adicionar novo produto na home`,    route: '/admin/controle/home'},
    {title: `Adicionar nova página de produto`,  route: '/admin/controle/produto'},
    {title: 'Criar novo slider',                 route: '/admin/controle/slider'},
  ]

  const Card = (props) => {
    return(
      <div onClick={()=>navigate(props.navigate)} className="card-btn">
        <h3>{props.title}</h3>
        {'>'}
      </div>
    )
  }

  return (
    <section className="route-modal">
      <div className="modal-box">
        <div className="button-container">
          <h1>O que deseja cadastrar?</h1>
          <button onClick={() => props.visible(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <path d="M27.75 9.25L9.25 27.75" stroke="#606060" stroke-width="3.08333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.25 9.25L27.75 27.75" stroke="#606060" stroke-width="3.08333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        {data.map(item => (
          <Card
            navigate={item.route}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )

}

export default RouteModal