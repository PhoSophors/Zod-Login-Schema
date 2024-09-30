
// AuthSchema.ts
import { z, ZodError } from 'zod';

/**************** loginSchema ***************** */
export const loginSchema = z.object({
  email: z.string().email().optional(),
  countryCode: z.string().optional().transform((val) => val?.replace(/^\+/, '')),
  phone: z.string().optional().transform((val) => val?.replace(/^0+/, '')),
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .max(15, "Password must not exceed 15 characters."),
}).refine((data) => data.email || (data.countryCode && data.phone), {
  message: "Must provide either email or phone number with country code..!",
});