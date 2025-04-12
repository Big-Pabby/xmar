import axios from "axios";
import { useAuthStore } from "@/store/useStore";

const api = axios.create({
  baseURL: "https://hairsby.up.railway.app/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the authentication token
api.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchAdminDashboard = async () => {
  const response = await api.get("/analytics/admin/overview");
  return response.data;
};

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};
export const fetchProduct = async (id: string | null) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
export const createProduct = async (product: any) => {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await api.post("/products", product);
  return response.data;
};
export const updateProduct = async (id: string | null, product: any) => {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};
export const deleteProduct = async (id: string | undefined) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};
export const fetchProductReview = async (id: string) => {
  const response = await api.get(`/products/reviews/${id}`);
  return response.data.data;
};
export const addProductReview = async (
  data: { rating: number; comment: string },
  id: string
) => {
  const response = await api.post(`/products/reviews/${id}`, data);
  return response.data;
};
export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};
export const fetchKYCData = async (page: number, limit: number) => {
  const response = await api.get(`/kyc/all?page=${page}&limit=${limit}`);
  return response.data.data;
};
export const approveKYCData = async (
  id: string,
  data: { status: string; decisionReason: string }
) => {
  const response = await api.put(`/kyc/${id}/review`, data);
  return response.data.data;
};
export const createCategory = async (category: {
  name: string;
  description: string;
}) => {
  const response = await api.post("/products/categories", category);
  return response.data;
};
export const setAccess = async (data: any) => {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await api.post("/admin/profiles", data);
  return response.data;
};
export const get_admin_profiles = async () => {
  const response = await api.get("/admin/profiles");
  return response.data;
};
export const get_users = async (data: any) => {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await api.get("/admin/users");
  return response.data;
};

// Add more API calls as needed
