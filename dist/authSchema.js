"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
// AuthSchema.ts
const zod_1 = require("zod");
/**************** loginSchema ***************** */
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    countryCode: zod_1.z.string().optional().transform((val) => val === null || val === void 0 ? void 0 : val.replace(/^\+/, '')),
    phone: zod_1.z.string().optional().transform((val) => val === null || val === void 0 ? void 0 : val.replace(/^0+/, '')),
    password: zod_1.z.string()
        .min(6, "Password must be at least 6 characters long")
        .max(15, "Password must not exceed 15 characters."),
}).refine((data) => data.email || (data.countryCode && data.phone), {
    message: "Must provide either email or phone number with country code..!",
});
