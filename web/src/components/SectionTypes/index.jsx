import { useEffect, useState } from "react"
import './index.scss'

const SectionType = () => {
  const [select, setSelect] = useState(false)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)

  const Card = ({ value, change, img, title }) => {
    return (
      <div onClick={() => change(!value)} className={`card-type ${value ? 'type-modal' : 'type-card'}`}>
        <img src={img} />
        <p>{title}</p>
      </div>
    )
  }

  const HandleCard = () => {
    if (select == true) {
      setSelect2(false)
      setSelect3(false)
    }
    if (select2 == true) {
      setSelect(false)
      setSelect3(false)
    }
    if (select3 == true) {
      setSelect2(false)
      setSelect(false)
    }
  }

  useEffect(() => {
    HandleCard()
  }, [])

  return (
    <section className="type-container">
      <Card
        value={select}
        title='Ticket'
        change={setSelect}
      />
      <Card
        title='Cashless'
        value={select2}
        change={setSelect2}
      />
      <Card
        value={select3}
        change={setSelect3}
        title='Hybrid'
      />
    </section>
  )
}

export default SectionType