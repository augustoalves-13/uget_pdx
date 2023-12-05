import './index.scss';
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const renderArticle = (index) => {
    return (
      <CSSTransition
        key={index}
        in={slide === index}
        timeout={400}
        classNames='fade'
        unmountOnExit
      >
        <article className='art'>
          {/* Conteúdo do article */}
          {`Article ${index + 1}`}
        </article>
      </CSSTransition>
    );
  };

  return (
    <section className="slider-container">
      <div className="images-container">
        {[0, 1, 2, 3, 4].map((index) => renderArticle(index))}
      </div>
      <div className="btn-container">
        {[0, 1, 2, 3, 4].map((index) => (
          <label key={index} onClick={() => setSlide(index)}></label>
        ))}
      </div>
    </section>
  );
};

export default Slider;
