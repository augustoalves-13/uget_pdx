import './index.scss'
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from 'react'
import About from '../../assets/images/header/About.svg'
import home from '../../assets/images/header/home.svg'
import pdx from '../../assets/images/header/pdx.svg'
import pdv from '../../assets/images/header/pdv.svg'

const Header = () => {
  const [selected, setSelected] = useState(false)
  const [ scrolled, setScrolled ] = useState(false)

  const data = [
    {
      id:1, 
      name:'Home',
      path:'' ,
      img: home,
    },
    {
      id:2, 
      name:'Sobre Nós', 
      path:'', 
      img: About,
    },
    {
      id:3, 
      name:'PDX',        
      path: '', 
      img: pdx,
    },
    {
      id:4, 
      name:'PDV',        
      path: '', 
      img: pdv,
    },
    {
      id:5, 
      name:'Notes',      
      path: '', 
      img: pdv,
    },
  ]

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
    </header>
  )
}

export default Header