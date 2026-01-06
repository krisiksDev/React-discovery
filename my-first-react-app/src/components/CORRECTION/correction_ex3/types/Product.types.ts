// 🎯 EXERCICE 3.3 - Solution: Product.types.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  category: string;
  description?: string;
}
 