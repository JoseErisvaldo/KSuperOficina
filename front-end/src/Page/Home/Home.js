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
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
    </div>
  )
}