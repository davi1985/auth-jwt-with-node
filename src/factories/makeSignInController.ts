import { SignInUseController } from "../application/controllers/SignInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export const makeSignInController = () =>
  new SignInUseController(makeSignInUseCase());
