import axios from "axios";
import { useAuthStore } from "@/store/useStore";
import { Blog } from "@/types/blog";

interface KYCQueryParams {
  search?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

const api = axios.create({
  baseURL: "https://api.xmarr.com/", // Replace with your API base URL
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

export const fetchKYCData = async (
  page: number,
  limit: number,
  params?: KYCQueryParams
) => {
  const queryParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(params?.search && { search: params.search }),
    ...(params?.status && { status: params.status }),
    ...(params?.startDate && { startDate: params.startDate }),
    ...(params?.endDate && { endDate: params.endDate }),
  });

  const response = await api.get(`/api/v2/admin/users/kyc?${queryParams}`);
  return response.data.data;
};
export const get_users = async (
  page: number,
  limit: number,
  params?: KYCQueryParams
) => {
  const queryParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(params?.search && { search: params.search }),
    ...(params?.status && { status: params.status }),
    ...(params?.startDate && { startDate: params.startDate }),
    ...(params?.endDate && { endDate: params.endDate }),
  });

  const response = await api.get(`/api/v2/admin/users/?${queryParams}`);
  return response.data.data;
};
export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
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
interface admin {
  access_first_name: string;
  access_last_name: string;
  access_email_address: string;
  access_account_tag: string;
}
export const setAccess = async (data: admin) => {
  const response = await api.post("/admin/profiles", data);
  return response.data;
};
export const get_admin_profiles = async () => {
  const response = await api.get("/admin/profiles");
  return response.data;
};
export const get_escrow_list = async () => {
  const response = await api.get("/api/v2/admin/escrow/all/");
  return response.data.data;
};
export const get_transaction_list = async () => {
  const response = await api.get("/api/v2/admin/transactions/");
  return response.data.data;
};
export const get_dispute_list = async () => {
  const response = await api.get("/api/v2/admin/dispute_resolutions/");
  return response.data.data;
};
export const get_dispute_metric = async () => {
  const response = await api.get("api/v2/admin/dispute_resolutions/metrics/");
  return response.data.data;
};
export const create_blog = async (blog: Blog) => {
  const response = await api.post("api/v2/admin/blogs/create/", blog);
  return response.data.data;
};
export const edit_blog = async () => {
  const response = await api.post("api/v2/admin/blogs/edit/");
  return response.data.data;
};
export const get_blogs = async () => {
  const response = await api.get("api/v2/admin/blogs/admin-blogs/");
  return response.data.data;
};
export const file_upload = async (data: FormData) => {
  const response = await api.post("api/v2/admin/file-uploads/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const create_legals = async (blog: Blog) => {
  const response = await api.post("api/v2/admin/legals/create/", blog);
  return response.data.data;
};
export const edit_legals = async () => {
  const response = await api.post("api/v2/admin/legals/edit/");
  return response.data.data;
};
export const get_admin_legals = async () => {
  const response = await api.get("api/v2/admin/legals/admin-legals/");
  return response.data.data;
};
export const get_escrow_fee = async () => {
  const response = await api.get("api/v2/admin/escrow/escrow-fee/");
  return response.data.data;
};
export const update_escrow_fee = async (data: {
  level: string;
  percentage: number;
}) => {
  const response = await api.post("api/v2/admin/escrow/escrow-fee/", data);
  return response.data.data;
};
