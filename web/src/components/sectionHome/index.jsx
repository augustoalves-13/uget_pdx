import { useEffect } from 'react'
import './index.scss'
import AOS from 'aos'
import { API_URL } from '../../api/config'

const SectionHome = ({ title, txt, image, background, direction }) => {

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 500
        })
    }, [])

    return (
        <section style={{ backgroundColor: background}} className='f-products'>
            <div style={{flexDirection:direction }} className={`container-section`}>
                <img className='section-img' data-aos='fade-left' src={API_URL + '/' + image} />
                <div data-aos='fade-up' className="txt-product">
                    <h1>{title}</h1>
                    <p>{txt}</p>
                </div>
            </div>
        </section>
    )
}

export default SectionHome