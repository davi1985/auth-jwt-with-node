import { SignUpUseController } from "../application/controllers";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export const makeSignUpController = () =>
  new SignUpUseController(makeSignUpUseCase());
