import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { formatPrice } from '../ui/formatPrice';
import { Button } from '../ui/button';
import { useProductsGet } from '../../Endpoints/GET/useProductsGet';
import PaginationControls from '../ui/PaginationControls';

export default function StockTable() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { data, loading, error, totalCount } = useProductsGet(page, pageSize);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(totalCount / pageSize);
  console.log(totalCount)
  return (
    <div className="p-4 flex flex-col h-full justify-between">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ean</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.ean}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.inventory[0]?.location?.location_name || ''}</TableCell>
              <TableCell>{product.inventory[0]?.quantity || 0}</TableCell>
              <TableCell>{formatPrice(product.price)}</TableCell>
              <TableCell>{product.seller.name}</TableCell>
              <TableCell>{product.seller.company}</TableCell>
              <TableCell>{product.seller.site}</TableCell>
              <TableCell>
                <Button variant="outline" size="icon">Editar</Button>
                <Button variant="outline" size="icon">Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationControls
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={setPage} 
      />
    </div>
  );
}
