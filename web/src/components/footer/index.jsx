import './index.scss'

const Footer = () => {

  const ColumnFooter = (props) => {
    return (
      <div className="column-footer">
        <h1>{props.title}</h1>
        <div className="txt-row">
          <div className="y-radius">
            <img src={props.img} />
          </div>
          <p>{props.content}</p>
        </div>
        <div className="txt-row">
          <div className="y-radius">
            <img src={props.img} />
          </div>
          <p>{props.content2}</p>
        </div>
      </div>
    )
  }

  return (
    <footer>
      <div className="content-footer">
        <ColumnFooter title='Contato' content='+55 11 3846-0777' content2='emailemaileamil' />
        <ColumnFooter title='Informações' content='UGET ID TECNOLOGIA E SOLUCOES LTDA' content2='CNPJ: 47.296.713/0001-08' />
        <ColumnFooter title='Endereço' content='R. Santa Cruz, 722 - Vila Mariana SP, 04122-000- GALLERY OFFICES' content2='Segunda à Sexta-Feira das 9h até 18h' />
      </div>
      <div className="copyRight">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle cx="24" cy="24" r="20" /><path d="M32 17.618c-.898-1.83-3.593-5.031-8.983-4.574c-5.39.458-9.433 5.49-8.983 11.893c.45 6.404 5.39 10.063 9.881 10.063C29.305 35 32 30.609 32 30.609" /></g></svg>
        <p>uGetId | Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer