import type { Product } from "@/types/product";

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Notebook Gamer Pro",
    description: "Notebook com RTX 4060 e 16GB RAM",
    price: 6499.99,
    stock: 12,
    category: "Eletrônicos",
  },
  {
    id: "2",
    name: "Mouse Wireless",
    description: "Mouse sem fio ergonômico com DPI ajustável",
    price: 149.9,
    stock: 50,
    category: "Periféricos",
  },
  {
    id: "3",
    name: "Teclado Mecânico RGB",
    description: "Teclado mecânico com switches blue e iluminação RGB",
    price: 349.9,
    stock: 30,
    category: "Periféricos",
  },
  {
    id: "4",
    name: "Monitor 27\" 4K",
    description: "Monitor IPS 4K 60Hz com HDR10",
    price: 2199.0,
    stock: 8,
    category: "Eletrônicos",
  },
  {
    id: "5",
    name: "Cadeira Gamer",
    description: "Cadeira ergonômica com apoio lombar e braço 4D",
    price: 1599.0,
    stock: 15,
    category: "Móveis",
  },
];
