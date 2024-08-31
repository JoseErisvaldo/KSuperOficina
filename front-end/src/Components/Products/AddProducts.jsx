import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import FormAddProduct from "./FormAddProducts";

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
            <FormAddProduct />
          </DialogContent>
      </Dialog>
    </div>
  );
}
