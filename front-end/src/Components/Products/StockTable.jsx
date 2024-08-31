import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useProducts } from "../../Endpoints/useCombinedData/useProducts";

export default function StockTable() {
  const { data, loading, error } = useProducts();
  const [editingCatalog, setEditingCatalog] = useState(null);

  const handleUpdateCatalog = () => {
    // Implement your update logic here
    console.log("Updating catalog:", editingCatalog);
    // Clear the editing state after update
    setEditingCatalog(null);
  };

  const handleDeleteCatalog = (id) => {
    // Implement your delete logic here
    console.log("Deleting catalog with id:", id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="min-w-full">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Ean</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Endereço</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Seller</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Site</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((catalog) => (
              <TableRow key={catalog.id}>
                <TableCell>{catalog.ean}</TableCell>
                <TableCell>{catalog.name}</TableCell>
                <TableCell>{catalog.description}</TableCell>
                <TableCell>{catalog.inventory[0]?.location?.location_name || ''}</TableCell>
                <TableCell>{catalog.inventory[0]?.quantity || 0}</TableCell>
                <TableCell>{catalog.seller?.name || 'N/A'}</TableCell>
                <TableCell>{catalog.seller?.company || 'N/A'}</TableCell>
                <TableCell>{catalog.seller?.site || 'N/A'}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="mr-2"
                        onClick={() => setEditingCatalog(catalog)}
                      >
                        Editar
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Catálogo</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Input
                          placeholder="Nome do Catálogo"
                          value={editingCatalog?.name || ''}
                          onChange={(e) => setEditingCatalog({ ...editingCatalog, name: e.target.value })}
                        />
                        <Input
                          placeholder="Descrição"
                          value={editingCatalog?.description || ''}
                          onChange={(e) => setEditingCatalog({ ...editingCatalog, description: e.target.value })}
                        />
                        <Button onClick={handleUpdateCatalog}>Atualizar</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDeleteCatalog(catalog.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
