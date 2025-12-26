import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRequestToServer } from "../../services/httpRequst/httpRequest";
import InputField from "../../components/hybrid/Input/InputField";
import { Button } from "../../components/shared/Button";
import { MainLink } from "../../components/shared/MainLink";

// ✅ اعتبارسنجی با Zod
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "ایمیل الزامی است")
    .email("ایمیل معتبر وارد کنید"),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const methods = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    setLoading(true);
    setMessage("");
    try {
      await postRequestToServer({
        address: "/auth/forgot-password",
        dataEntry: data,
      });
      setMessage("✅ لینک تغییر رمز به ایمیل شما ارسال شد.");
    } catch (error) {
      setMessage("❌ خطا در ارسال درخواست. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
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
            فراموشی رمز عبور
          </h2>

          <InputField
            name="email"
            label="ایمیل"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            disabled={loading}
          >
            {loading ? "در حال ارسال..." : "ارسال لینک تغییر رمز"}
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

export default ForgotPasswordPage;
