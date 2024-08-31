import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";

export default function AddProducts() {

  return (
    <div>
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
              value={'newCatalog.name'}
              onChange={'(e) => setNewCatalog({ ...newCatalog, name: e.target.value })'}
            />
            <Input
              placeholder="Descrição"
              value={'newCatalog.description'}
              onChange={'(e) => setNewCatalog({ ...newCatalog, description: e.target.value })'}
            />
            <Button onClick={'addCatalog'}>Adicionar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
