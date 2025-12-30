// src/pages/AuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/hooks/useAuthStore";

const LoginWithGoogleCallback = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const refreshToken = params.get("refreshToken");
    const email = params.get("email") ?? undefined;
    const sub = params.get("sub") ?? "google-user";

    if (!refreshToken) {
      navigate("/login");
      return;
    }

    setAuth({ id: sub, email }, refreshToken);

    navigate("/home");
  }, [navigate, setAuth]);

  return <p>در حال ورود...</p>;
};

export default LoginWithGoogleCallback;
