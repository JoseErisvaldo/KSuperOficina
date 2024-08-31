import ProductsTable from '../../Components/Products/ProductsTable'
import Navigation from '../../Components/Navigation/Navigation'
import { CardNavigation } from '../../Components/Navigation/CardNavigarion'
import { useState } from 'react'
import AddProducts from '../../Components/Products/AddProducts'
import { Container } from '../../Components/ui/container'
import H1 from '../../Components/ui/h1'

export default function Products() {
  const [naigation, setNaigation] = useState("catalogo")
  
  return (
    <Container>
      <Navigation >
        <CardNavigation onClick={() => setNaigation("catalogo")} text={"Catalogo"} />
        <CardNavigation text={"Estoque"} />
        <CardNavigation text={"Disponibilidade de Estoque"} />
      </Navigation>
      
      <div className=''>
        <H1>Catalogo</H1>
        <AddProducts />
      <ProductsTable />
      </div>
    </Container>
  )
}