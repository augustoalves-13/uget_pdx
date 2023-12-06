import './index.scss'
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from 'react'
import data from '../../data/Header'

const Header = (props) => {
  const [selected, setSelected] = useState(false)
  const [ scrolled, setScrolled ] = useState(false)

    

  useEffect(()=>{
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }

    window.addEventListener('scroll' , onScroll)

    return () => window.removeEventListener('scroll', onScroll)

  },[])

  const NavContent = (props) => {

    const handleClick = () => {
      setSelected(!selected)
    }

    return (
      <div onClick={handleClick} className={`container-nav ${selected ? 'container-nav' : 'select'}`}>
        {props.children}
        <p>{props.title}</p>
      </div>
    )
  }

  return (
    <header className={scrolled ? 'scrolled' : 'wait'}>
      <img src={logo} />
      <nav className='hdr-navbar'>
        {data.map(item => (
          <NavContent title={item.name}>
            <img src={item.img}/>
          </NavContent>
        ))}
      </nav>
      <button onClick={props.onClick} className={ props.class ? 'close-side' : 'open-side' } >
          <span id='first'></span>
          <span id='second'></span>
          <span id='third'></span>
      </button>
    </header>
  )
}

export default Header