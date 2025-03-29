import { create } from "zustand";

export type Provider = {
  id: string;
  businessName: string;
  latitude: number | null;
  longitude: number | null;
  city: string;
  address: string | null;
  country: string;
  photo: string | null;
  rating: number;
};

export type Product = {
  id?: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  category: string;
  brand: string;
  banner?: string;
  stock: number;
  images: string[]; // Assuming images are stored as URLs
  providerId?: string;
  variants?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  hasVariants?: boolean;
  status?: "active" | "inactive"; // Define other possible statuses if necessary
  metadata?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  createdAt?: string; // ISO date string
  updatedAt?: string; // ISO date string
  provider?: Provider;
};
export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string | null;
  status: string;
  createdBy: string;
  metadata: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  createdAt: string;
  updatedAt: string;
}
interface Pagination {
  total: number;
  page: number;
  totalPages: number;
}

export interface ProductCategory {
  categories: Category[];
  pagination: Pagination;
}
export interface ProductDetails {
  products: Product[];
  pagination: Pagination;
}

interface ProductState {
  productsDetail: ProductDetails;
  category: ProductCategory;
  setProducts: (product: ProductDetails) => void;
  setCategories: (category: ProductCategory) => void;
  addProduct: (product: Product) => void;
  addCategory: (category: Category) => void;
  updateProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  productsDetail: {
    products: [],
    pagination: { total: 0, page: 0, totalPages: 0 },
  },
  category: {
    categories: [],
    pagination: {
      total: 0,
      page: 0,
      totalPages: 0,
    },
  },
  setProducts: (products) => set({ productsDetail: products }),
  addProduct: (product) =>
    set((state) => ({
      productsDetail: {
        ...state.productsDetail,
        products: [...state.productsDetail.products, product],
      },
    })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      productsDetail: {
        ...state.productsDetail,
        products: state.productsDetail.products.map((product) =>
          product?.id === updatedProduct?.id ? updatedProduct : product
        ),
      },
    })),
  removeProduct: (productId) =>
    set((state) => ({
      productsDetail: {
        ...state.productsDetail,
        products: state.productsDetail.products.filter(
          (product) => product?.id !== productId
        ),
      },
    })),

  setCategories: (category) => set({ category }),
  addCategory: (category) =>
    set((state) => ({
      category: {
        ...state.category,
        categories: [...state.category.categories, category],
      },
    })),
}));
