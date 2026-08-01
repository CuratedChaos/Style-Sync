export interface Product {
  id: number;
  name: string;
  brand: string; 
  price: number
  rating: number;
  ratingCount: number;
  sizes: string[]
  colours: string[];
  fabric: string;
  description: string
  img: string;
  tag?: string;
  wishlisted: boolean
}