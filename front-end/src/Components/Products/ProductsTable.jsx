import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"


export default function ProductsTable() {
  const [catalogs, setCatalogs] = useState([
    { id: 1, name: 'Verão 2023', description: 'Coleção de verão' },
    { id: 2, name: 'Inverno 2023', description: 'Coleção de inverno' },
  ])

  const [newCatalog, setNewCatalog] = useState({ name: '', description: '' })
  const [editingCatalog, setEditingCatalog] = useState(null)

  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Nome</TableHead>
        <TableHead>Descrição</TableHead>
        <TableHead>Ações</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {catalogs.map((catalog) => (
        <TableRow key={catalog.id}>
          <TableCell>{catalog.name}</TableCell>
          <TableCell>{catalog.description}</TableCell>
          <TableCell>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
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
                    value={'editingCatalog?.name'}
                    onChange={(e) => setEditingCatalog('{ ...editingCatalog, name: e.target.value }')}
                  />
                  <Input
                    placeholder="Descrição"
                    value={editingCatalog?.description || ''}
                    onChange={(e) => setEditingCatalog({ ...editingCatalog, description: e.target.value })}
                  />
                  <Button onClick={'updateCatalog'}>Atualizar</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="icon" onClick={'() => deleteCatalog(catalog.id)'}>
              Excluir
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}