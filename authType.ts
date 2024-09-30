// authType.ts
import { z } from 'zod';
import { loginSchema } from './authSchema';

export type LoginInput = z.infer<typeof loginSchema>;
