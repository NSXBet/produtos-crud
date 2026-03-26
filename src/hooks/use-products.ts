import { useState } from "react";
import type { Product, ProductFormData } from "@/types/product";
import { initialProducts } from "@/data/mock-products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (data: ProductFormData) => {
    const newProduct: Product = {
      ...data,
      id: crypto.randomUUID(),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id: string, data: ProductFormData) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
};
