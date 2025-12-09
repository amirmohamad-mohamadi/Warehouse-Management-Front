import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import InputField from "../Input/InputField";
import { Button } from "../../shared/Button";
import { postRequestToServer } from "../../../services/httpRequst/httpRequest";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "./signupSchema";
import { MainLink } from "../../shared/MainLink";

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupForm: React.FC = () => {
  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormValues) => {
    postRequestToServer({
      address: "/auth/signup",
      dataEntry: {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      onSuccess: () => {
        navigate("/login");
      },
      onFailed: (err) => {
        console.error("❌ خطا در ثبت‌نام:", err.message);
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
          name="username"
          label="نام کاربری"
          placeholder="yourusername"
        />
        <InputField name="email" label="ایمیل" placeholder="you@example.com" />
        <InputField
          name="password"
          label="رمز عبور"
          type="password"
          placeholder="******"
        />
        <InputField
          name="confirmPassword"
          label="تکرار رمز عبور"
          type="password"
          placeholder="******"
        />
        <Button type="submit" variant="primary" size="md">
          ثبت‌نام
        </Button>
        <MainLink
          to="/login"
          color="gray"
          className="text-sm block text-center mt-2"
        >
          برای ورود اینجا کلیک کنید
        </MainLink>
      </form>
    </FormProvider>
  );
};
