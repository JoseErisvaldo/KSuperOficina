import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../Components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../Components/ui/table'
import { Button } from '../../Components/ui/button'
import { Input } from '../../Components/ui/input'

export default function Home() {
  const [catalogs, setCatalogs] = useState([
    { id: 1, name: 'Verão 2023', description: 'Coleção de verão' },
    { id: 2, name: 'Inverno 2023', description: 'Coleção de inverno' },
  ])
  const [newCatalog, setNewCatalog] = useState({ name: '', description: '' })
  const [editingCatalog, setEditingCatalog] = useState(null)

  const addCatalog = () => {
    setCatalogs([...catalogs, { id: Date.now(), ...newCatalog }])
    setNewCatalog({ name: '', description: '' })
  }

  const updateCatalog = () => {
    if (editingCatalog) {
      setCatalogs(catalogs.map(cat => cat.id === editingCatalog.id ? editingCatalog : cat))
      setEditingCatalog(null)
    }
  }

  const deleteCatalog = (id) => {
    setCatalogs(catalogs.filter(cat => cat.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Painel de Administração de Catálogos</h1>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4">
             Adicionar Catálogo
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Catálogo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            
            <Input
              placeholder="Nome do Catálogo"
              value={newCatalog.name}
              onChange={(e) => setNewCatalog({ ...newCatalog, name: e.target.value })}
            />
            <Input
              placeholder="Descrição"
              value={newCatalog.description}
              onChange={(e) => setNewCatalog({ ...newCatalog, description: e.target.value })}
            />
            <Button onClick={addCatalog}>Adicionar</Button>
          </div>
        </DialogContent>
      </Dialog>

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
                        value={editingCatalog?.name || ''}
                        onChange={(e) => setEditingCatalog({ ...editingCatalog, name: e.target.value })}
                      />
                      <Input
                        placeholder="Descrição"
                        value={editingCatalog?.description || ''}
                        onChange={(e) => setEditingCatalog({ ...editingCatalog, description: e.target.value })}
                      />
                      <Button onClick={updateCatalog}>Atualizar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="icon" onClick={() => deleteCatalog(catalog.id)}>
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}