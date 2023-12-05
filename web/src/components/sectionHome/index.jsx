import './index.css'

const SectionHome = ({ title, txt, image, background, direction}) => {
    return (
        <section style={{backgroundColor: background}} className='f2-pdx'>
            <div className={`container-banner ${direction ? 'row' : 'row-reverse'}`}>
                <article class="pdx-img">{image}</article>
                <div className="pdx-txt">
                    <h1>{title}</h1>
                    <p>{txt}</p>
                </div>
            </div>
        </section>
    )
}

export default SectionHome