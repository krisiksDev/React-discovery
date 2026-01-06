export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Pro 2024",
    price: 1299,
    imageUrl: "https://picsum.photos/seed/laptop/400/300",
    inStock: true,
    category: "Informatique",
    description: "Le meilleur laptop pour développeurs",
  },
  {
    id: 2,
    name: "Souris Gaming RGB",
    price: 79,
    imageUrl: "https://picsum.photos/seed/mouse/400/300",
    inStock: false,
    category: "Accessoires",
    description: "Précision et style pour gamers",
  },
  {
    id: 3,
    name: "Clavier Mécanique",
    price: 149,
    imageUrl: "https://picsum.photos/seed/keyboard/400/300",
    inStock: true,
    category: "Accessoires",
    description: "Switches Cherry MX, rétroéclairage RGB",
  },
  {
    id: 4,
    name: 'Écran 4K 27"',
    price: 399,
    imageUrl: "https://picsum.photos/seed/monitor/400/300",
    inStock: true,
    category: "Informatique",
    description: "IPS, 60Hz, parfait pour le développement",
  },
  {
    id: 5,
    name: "Webcam HD 1080p",
    price: 89,
    imageUrl: "https://picsum.photos/seed/webcam/400/300",
    inStock: false,
    category: "Accessoires",
    description: "Parfaite pour les visioconférences",
  },
  {
    id: 6,
    name: "Casque Audio Pro",
    price: 199,
    imageUrl: "https://picsum.photos/seed/headset/400/300",
    inStock: true,
    category: "Audio",
    description: "Réduction de bruit active, autonomie 30h",
  },
];
