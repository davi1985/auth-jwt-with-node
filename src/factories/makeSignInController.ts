import { SignInUseController } from "../application/controllers";
import { makeSignInUseCase } from "./makeSignInUseCase";

export const makeSignInController = () =>
  new SignInUseController(makeSignInUseCase());
