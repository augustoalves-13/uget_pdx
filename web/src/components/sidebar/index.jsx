import './index.scss'
import data from '../../data/Header'

const Sidebar = (props) => {

  return(
    <div className={`side-main ${props.visible ? 'side-visible' : 'side-hidden'}`}>
      {data.map(item => (
        <div className='btn-side'>
          <img src={item.img}/>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Sidebar