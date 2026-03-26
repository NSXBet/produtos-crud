import { useState } from "react";
import { Plus, Package } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useProducts } from "@/hooks/use-products";
import ProductTable from "@/components/products/ProductTable";
import ProductFormDialog from "@/components/products/ProductFormDialog";
import DeleteProductDialog from "@/components/products/DeleteProductDialog";
import type { Product, ProductFormData } from "@/types/product";

const Index = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCreate = () => {
    setSelectedProduct(null);
    setFormOpen(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setFormOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const handleFormSubmit = (data: ProductFormData) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, data);
      toast.success("Produto atualizado com sucesso!");
    } else {
      addProduct(data);
      toast.success("Produto criado com sucesso!");
    }
  };

  const handleDeleteConfirm = () => {
    if (selectedProduct) {
      deleteProduct(selectedProduct.id);
      toast.success("Produto excluído com sucesso!");
      setDeleteOpen(false);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Produtos
              </h1>
              <p className="text-sm text-muted-foreground">
                {products.length} produto{products.length !== 1 && "s"} cadastrado{products.length !== 1 && "s"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={handleCreate}>
              <Plus className="mr-2 h-4 w-4" />
              Novo Produto
            </Button>
          </div>
        </div>

        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <ProductFormDialog
          key={selectedProduct?.id ?? "new"}
          open={formOpen}
          onOpenChange={setFormOpen}
          onSubmit={handleFormSubmit}
          product={selectedProduct}
        />

        <DeleteProductDialog
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          onConfirm={handleDeleteConfirm}
          productName={selectedProduct?.name ?? ""}
        />
      </div>
    </div>
  );
};

export default Index;
