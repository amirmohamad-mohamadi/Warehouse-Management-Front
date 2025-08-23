import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(3, "ایمیل یا نام کاربری را وارد کنید"),
  password: z.string().min(6, "رمز عبور حداقل ۶ کاراکتر باشد"),
});
