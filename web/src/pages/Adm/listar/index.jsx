import { useEffect, useState } from 'react'
import Container from '../../../components/Adm/Container'
import HeaderAdm from '../../../components/Adm/headerAdm'
import SidebarAdm from '../../../components/Adm/sidebarAdm'
import './index.scss'
import { ShowProducts } from '../../../api/product'
import { SearchImg } from '../../../api/adm'

const Listar = () => {
  const [products, setProducts] = useState([])

  // Efeito para listar todos os produtos ao abrir a pagina
  useEffect(() => {
    const ListProduct = async () => {
      const resp = await ShowProducts() //Api consumida na file ./src/produtos.js

      console.log(resp)
      setProducts(resp)
    }

    ListProduct()
  }, [])

  return (
    <div className="adm-container">
      <SidebarAdm />
      <div className="adm-content">
        <HeaderAdm />

        <Container title='Listar Produtos'>
          <section className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Resumo</th>
                </tr>
              </thead>
              <tbody>
                {products.map(item => (
                  <tr className='body-table-line'>
                    <td>#{item.id}</td>
                    <td>
                      <img src={ 'http://localhost:5000/' + item.img}/>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.text.slice(0,3)}</td>
                    <td>
                      <button>e</button>
                      <button>a</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Container>
      </div>
    </div>
  )

}

export default Listar 