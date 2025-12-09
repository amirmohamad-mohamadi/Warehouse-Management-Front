import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../Input/InputField";
import { loginSchema } from "./loginSchema";
import type z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/Button";
import { postRequestToServer } from "../../../services/httpRequst/httpRequest";
import { useAuthStore } from "../../../store/hooks/useAuthStore";
import { MainLink } from "../../shared/MainLink";

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const setRefreshToken = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormValues) => {
    const isEmail = data.identifier.includes("@");
    const endpoint = isEmail ? "/auth/login" : "/auth/username-login";

    postRequestToServer({
      address: endpoint,
      dataEntry: {
        // اگر ایمیل بود → email
        // اگر نبود → username
        ...(isEmail
          ? { email: data.identifier }
          : { username: data.identifier }),
        password: data.password,
      },
      onSuccess: (res) => {
        const data = res.data;

        if (data?.refreshToken) {
          setRefreshToken(data?.user, data?.refreshToken);
          navigate("/home");
        } else {
          console.warn("⚠️ Refresh Token دریافت نشد.");
        }
      },
      onFailed: (err) => {
        console.error("❌ خطا در ورود:", err.message);
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto bg-white/80 p-6 rounded-lg shadow-md border border-gray-300"
      >
        <InputField
          name="identifier"
          label="ایمیل یا نام کاربری"
          placeholder="you@example.com یا yourusername"
        />
        <InputField
          name="password"
          label="رمز عبور"
          type="password"
          placeholder="******"
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="cursor-pointer"
        >
          ورود
        </Button>

        <div className="flex justify-between mt-4 text-sm text-blue-600">
          <MainLink to="/signup">ثبت‌نام</MainLink>
          <MainLink to="/forgot-password">فراموشی رمز عبور</MainLink>
        </div>
      </form>
    </FormProvider>
  );
};
