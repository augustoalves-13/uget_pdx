import './index.scss';
import { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { ListSliderProducts } from '../../api/slider';
import { API_URL } from '../../api/config';

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [item, setItem] = useState([])

  useEffect(()=>{
    const GetProducts = async( ) => {
      const resp = await ListSliderProducts()
      
      console.log(resp)
      setItem(resp)
    }

    GetProducts()
  },[])

  const renderArticle = (props) => {
    return (
      <CSSTransition
        key={props.index}
        in={slide === props.index}
        timeout={400}
        classNames='fade'
        unmountOnExit
      >
        <article className='art'>
          <img src={props.item}/>
        </article>
      </CSSTransition>
    );
  };

  return (
    <section className="slider-container">
      <div className="images-container">
        {item.map((item, index) => (
          <renderArticle index={index} item={ API_URL+ '/'+ item.image}/>
        ))}
      </div>
      <div className="btn-container">
        {item.map((index) => (
          <label key={index} onClick={() => setSlide(index)}></label>
        ))}
      </div>
    </section>
  );
};

export default Slider;
