import { zValidator } from "@hono/zod-validator";
import {
  authLoginValidationSchema,
  authLogoutValidationSchema,
  authRegisterValidationSchema,
  urlValidationSchema,
} from "./object.ts";

// import type { ValidationTargets } from 'hono'
// - json: for validating JSON body
// - form: for validating form data
// - query: for validating URL query parameters
// - param: for validating URL parameters
// - header: for validating request headers
// - cookie: for validating cookies

export const postUrlShortenValidator = zValidator(
  "json",
  urlValidationSchema,
);

export const loginValidator = zValidator(
  "query",
  authLoginValidationSchema,
);

export const registerValidator = zValidator(
  "query",
  authRegisterValidationSchema,
);

export const logoutValidator = zValidator(
  "query",
  authLogoutValidationSchema,
);

export default {
  postUrlShortenValidator,
  loginValidator,
  registerValidator,
  logoutValidator,
};
