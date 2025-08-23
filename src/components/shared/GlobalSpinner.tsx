import { useLoadingStore } from "../../store/hooks/useLoadingStore";

const GlobalSpinner = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default GlobalSpinner;
