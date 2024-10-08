import { AuthenticationMiddleware } from "../application/middlewares";

export const makeAuthenticationMiddleware = () =>
  new AuthenticationMiddleware();
