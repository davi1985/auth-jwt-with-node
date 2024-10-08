import { AuthenticationMiddleware } from "../application/middlewares/AuthenticationMiddleware";

export const makeAuthenticationMiddleware = () =>
  new AuthenticationMiddleware();
