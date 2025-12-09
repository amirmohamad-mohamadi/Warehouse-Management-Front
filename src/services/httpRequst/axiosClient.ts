import axios, { type InternalAxiosRequestConfig, type AxiosError } from "axios";
import { baseURL } from "../../config/baseURL";
import { useAuthStore } from "../../store/hooks/useAuthStore";

const axiosClient = axios.create({
  baseURL: baseURL || "http://localhost:3000/api/v1/wms",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // TODO: Send access token via HttpOnly cookie (do not read token in JS)
});

// TODO: Attach refresh token only for ‘/refresh’ requests
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { refreshToken } = useAuthStore.getState();

    if (config.url?.includes("/refresh") && refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("❌ خطا در ارسال درخواست:", error.message);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn("⚠️ Access Token نامعتبر بود. کاربر خارج شد.");
      useAuthStore.getState().clearAuth();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
