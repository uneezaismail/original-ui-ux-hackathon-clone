type Slug = {
  current: string;
};

export interface Product {
    name: string;
    images: string[]; 
    price: number;
    slug: Slug;
    discountPrice?: number; 
    discountPercentage?: number; 
    tags: string[];
  }
  

  // types/product.ts
export interface StockLevel {
  size: string;
  color: string;
  quantity: number;
}

export interface Inventory {
  product_name: string;
  sku: string;
  stock_levels: StockLevel[];
}

export interface productdetail {
  _id:any;
  name: string;
  images: string[];
  price: number;
  discountPercentage?: number;
  description: string;
  tags: string[];
  rating: number;
  ratingCount: number;
  sizeOptions: string[];
  colorOptions: string[];
  sku: string;
  category?: string;
  inventory: Inventory;
}