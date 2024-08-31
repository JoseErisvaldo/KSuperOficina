import ProductsTable from '../../Components/Products/ProductsTable'
import Navigation from '../../Components/Navigation/Navigation'
import { CardNavigation } from '../../Components/Navigation/CardNavigarion'
import { useState } from 'react'
import AddProducts from '../../Components/Products/AddProducts'
import { Container } from '../../Components/ui/container'
import H1 from '../../Components/ui/h1'
import StockTable from '../../Components/Products/StockTable'

export default function Products() {
  const [naigation, setNaigation] = useState("catalog")
  
  return (
    <Container>
      <Navigation >
        <CardNavigation onClick={() => setNaigation("catalog")} text={"Catalogo"} />
        <CardNavigation onClick={() => setNaigation("stock")} text={"Estoque"} />
        <CardNavigation onClick={() => setNaigation("stockAvailability")} text={"Disponibilidade de Estoque"} />
      </Navigation>
      {naigation === "catalog" 
        && <div className=''>
        <H1>Catalogo</H1>
        <AddProducts />
      <ProductsTable />
      </div>}

      {naigation === "stock" 
        && <div className=''>
        <H1>Estoque</H1>
      <StockTable />
      </div>}

      {naigation === "stockAvailability" 
        && <div className=''>
        <H1>Disponibilidade de Estoque</H1>
      <ProductsTable />
      </div>}
      
    </Container>
  )
}