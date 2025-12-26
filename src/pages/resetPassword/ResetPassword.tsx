import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRequestToServer } from "../../services/httpRequst/httpRequest";
import InputField from "../../components/hybrid/Input/InputField";
import { Button } from "../../components/shared/Button";
import { MainLink } from "../../components/shared/MainLink";
import { useNavigate } from "react-router-dom";

// ✅ اعتبارسنجی با Zod
const resetPasswordSchema = z
  .object({
    password: z.string().trim().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیست",
    path: ["confirmPassword"],
  });

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const methods = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordValues) => {
    setLoading(true);
    setMessage("");
    try {
      const token = new URLSearchParams(window.location.search).get("token");
      await postRequestToServer({
        address: "/auth/reset-password",
        dataEntry: { ...data, token },
      });
      setMessage("✅ رمز عبور با موفقیت تغییر کرد.");
    } catch (error) {
      setMessage("❌ خطا در تغییر رمز عبور. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-4 max-w-sm w-full mx-auto bg-white/80 p-6 rounded-lg shadow-md border border-gray-300"
        >
          <h2 className="text-lg font-semibold text-center mb-2">
            تغییر رمز عبور
          </h2>

          <InputField
            name="password"
            label="رمز عبور جدید"
            type="password"
            placeholder="رمز عبور جدید خود را وارد کنید"
          />

          <InputField
            name="confirmPassword"
            label="تکرار رمز عبور"
            type="password"
            placeholder="رمز عبور را دوباره وارد کنید"
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            disabled={loading}
          >
            {loading ? "در حال تغییر..." : "تغییر رمز عبور"}
          </Button>

          {message && (
            <p className="text-center text-sm mt-2 text-gray-700">{message}</p>
          )}

          <div className="flex justify-between mt-4 text-sm text-blue-600">
            <MainLink to="/login">ورود</MainLink>
            <MainLink to="/signup">ثبت‌نام</MainLink>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordPage;
