import { z } from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(6, "نام کاربری باید حداقل 6 حرف باشد"),
    email: z.email("ایمیل معتبر نیست"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ حرف باشد"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });
