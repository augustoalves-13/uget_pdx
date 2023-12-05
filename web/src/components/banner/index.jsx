import Slider from '../slider'
import './index.css'

const Banner = ({ txt, img }) => {
    return (
        <div className="banner">
            <div className="container-banner">
                <div className="slide-txt">
                    <img src={img} />
                    <p>{txt}</p>
                </div>
               <Slider/>
            </div>
        </div>
    )
}

export default Banner