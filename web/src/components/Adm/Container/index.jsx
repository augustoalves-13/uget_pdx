import './index.scss'

const Container = (props) => {
  return (
    <section className="section-adm">
      <div className="title-container">
        <aside></aside>
        <h3>{props.title}</h3>
      </div>
      {props.children}
    </section>
  )
}

export default Container  