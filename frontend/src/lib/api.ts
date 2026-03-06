import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add interceptor to include JWT token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authApi = {
    login: (data: any) => apiClient.post("/auth/login", data),
    getMe: () => apiClient.get("/auth/me"),
};

export const appointmentApi = {
    create: (data: any) => apiClient.post("/appointments/", data),
    getAll: () => apiClient.get("/appointments/"),
    updateStatus: (id: number, status: string) => apiClient.patch(`/appointments/${id}/status?status=${status}`),
};

export const blogApi = {
    getAll: () => apiClient.get("/blog/"),
    create: (data: any) => apiClient.post("/blog/", data),
};

export const planApi = {
    getAll: () => apiClient.get("/plans/"),
    create: (data: any) => apiClient.post("/plans/", data),
};

export const testimonialApi = {
    getAll: () => apiClient.get("/testimonials/"),
    create: (data: any) => apiClient.post("/testimonials/", data),
};

export const inquiryApi = {
    getAll: () => apiClient.get("/inquiries/"),
    create: (data: any) => apiClient.post("/inquiries/", data),
};

export default apiClient;
