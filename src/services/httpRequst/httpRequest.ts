import axiosClient from "./axiosClient";
import { useLoadingStore } from "../../store/hooks/useLoadingStore";

type RequestOptions<T = any> = {
  address: string;
  dataEntry?: any;
  config?: object;
  onRequest?: () => void;
  onSuccess?: (response: T) => void;
  onFailed?: (error: any) => void;
  withLoading?: boolean;
};

const setLoading = useLoadingStore.getState().setLoading;

export const getRequestToServer = async <T = any>({
  address,
  config = {},
  onRequest,
  onSuccess,
  onFailed,
  withLoading = true,
}: RequestOptions<T>) => {
  try {
    if (withLoading) setLoading(true);
    onRequest?.();

    const response = await axiosClient.get<T>(address, config);
    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    onFailed?.(error);
    throw error;
  } finally {
    if (withLoading) setLoading(false);
  }
};

export const postRequestToServer = async <T = any>({
  address,
  dataEntry,
  config = {},
  onRequest,
  onSuccess,
  onFailed,
  withLoading = true,
}: RequestOptions<T>) => {
  try {
    if (withLoading) setLoading(true);
    onRequest?.();

    const response = await axiosClient.post<T>(address, dataEntry, config);
    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    onFailed?.(error);
    throw error;
  } finally {
    if (withLoading) setLoading(false);
  }
};

export const putRequestToServer = async <T = any>({
  address,
  dataEntry,
  config = {},
  onRequest,
  onSuccess,
  onFailed,
  withLoading = true,
}: RequestOptions<T>) => {
  try {
    if (withLoading) setLoading(true);
    onRequest?.();

    const response = await axiosClient.put<T>(address, dataEntry, config);
    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    onFailed?.(error);
    throw error;
  } finally {
    if (withLoading) setLoading(false);
  }
};

export const deleteRequestToServer = async <T = any>({
  address,
  config = {},
  onRequest,
  onSuccess,
  onFailed,
  withLoading = true,
}: RequestOptions<T>) => {
  try {
    if (withLoading) setLoading(true);
    onRequest?.();

    const response = await axiosClient.delete<T>(address, config);
    onSuccess?.(response.data);
    return response.data;
  } catch (error) {
    onFailed?.(error);
    throw error;
  } finally {
    if (withLoading) setLoading(false);
  }
};
