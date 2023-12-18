import { useEffect } from 'react'
import Slider from '../slider'
import './index.css'
import AOS from 'aos'

const Banner = ({ txt, img }) => {

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 500
        })
    }, [])

    return (
        <div className="banner">
            <div className="container-banner">
                <div data-aos='fade-right' className="slide-txt">
                    <img src={img} />
                    <p className='slideTxt'>{txt}</p>
                </div>
                <Slider />
            </div>
        </div>
    )
}

export default Banner