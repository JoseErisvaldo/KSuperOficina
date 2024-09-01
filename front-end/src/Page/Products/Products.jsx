// src/Pages/Products.js
import { useState } from 'react';
import ProductsTable from '../../Components/Products/ProductsTable';
import AddProducts from '../../Components/Products/AddProducts';
import StockTable from '../../Components/Products/StockTable';
import { Container } from '../../Components/ui/container';
import H1 from '../../Components/ui/h1';
import ResponsiveContainer from '../../Components/ui/ResponsiveContainer';
import NavigationTabs from '../../Components/ui/navigationTabs';

const TABS = [
  { value: 'catalog', label: 'Catálogo' },
  { value: 'stock', label: 'Estoque' },
  { value: 'stockAvailability', label: 'Disponibilidade de Estoque' }
];

const CONTENT_COMPONENTS = {
  catalog: () => (
    <>
      <ProductsTable />
    </>
  ),
  stock: () => (
    <>
      <StockTable />
    </>
  ),
  stockAvailability: () => (
    <>

      <ProductsTable />
    </>
  ),
};

export default function Products() {
  const [currentTab, setCurrentTab] = useState('catalog');

  const CurrentContent = CONTENT_COMPONENTS[currentTab] || (() => null);

  return (
    <ResponsiveContainer>
      <NavigationTabs
        tabs={TABS}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      {currentTab === 'catalog' && 
      <div className='m-2 flex items-center justify-between flex-wrap gap-2'>
        <H1>Catálogo</H1>
         <AddProducts />
      </div>
      }
      {currentTab === 'stock' && 
      <div className='m-2 flex items-center justify-between flex-wrap gap-2'>
        <H1>Estoque</H1>
      </div>
      }
      {currentTab === 'stockAvailability' && 
      <div className='m-2 flex items-center justify-between flex-wrap gap-2'>
        <H1>Disponibilidade do Estoque</H1>
      </div>
      }

      <Container>
        <CurrentContent />
      </Container>
    </ResponsiveContainer>
  );
}
