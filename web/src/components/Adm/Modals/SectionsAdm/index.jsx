import { useState } from 'react'
import './index.scss'
import { set } from 'local-storage'

const ModalSections = (props) => {
    const [buttonClass, setButtonClass] = useState(null)

    const data = [
        { id: 1, name: 'faixa1', img: '' },
        { id: 2, name: 'faixa2', img: '' },
        { id: 3, name: 'faixa3', img: '' },
        { id: 4, name: 'faixa5', img: '' },
    ]

    return (
        <main className="main-modal">
            <div className="modal-box">
                <div className="button-container">
                    <button onClick={() => props.onClose(false)}>
                        close
                    </button>
                </div>
                <section className="card-container">
                    {
                        data.map(item => (
                            <div
                                className={buttonClass === item.id ? 'card-content' : 'content-card'}
                                onClick={()=>setButtonClass(item.id)}
                            >
                                <div className='img-content'></div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </main>
    )
}

export default ModalSections