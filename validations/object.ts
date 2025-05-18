import { z } from "zod";

// Zod Schemas

export const urlValidationSchema = z.object({
  url: z.string().url("Invalid URL format"),
});

export const authLoginValidationSchema = z.object({
  username: z.string().min(2).max(20).trim().toLowerCase(),
  password: z.string().min(8).max(100).trim(),
});

export const authRegisterValidationSchema = z.object({
  username: z.string().min(2).max(20).trim().toLowerCase(),
  password: z.string().min(8).max(100).trim(),
});
export const authLogoutValidationSchema = z.object({
  username: z.string().min(2).max(20).trim().toLowerCase(),
});

export default {
  urlValidationSchema,
  authLoginValidationSchema,
  authRegisterValidationSchema,
  authLogoutValidationSchema,
};
