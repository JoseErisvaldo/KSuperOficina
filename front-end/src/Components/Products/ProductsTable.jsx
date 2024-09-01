// ProductsTable.js
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { formatPrice } from '../ui/formatPrice';
import { Button } from '../ui/button';
import PaginationControls from '../ui/PaginationControls';
import { useProducts } from '../../Endpoints/useCombinedData/useProducts';

export default function ProductsTable() {
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const { data, loading, error, totalCount } = useProducts(page, pageSize);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="p-4 justify-between flex flex-col h-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ean</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.ean}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
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
