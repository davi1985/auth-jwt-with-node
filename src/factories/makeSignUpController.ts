import { SignUpUseController } from "../application/controllers/SignUpController";
import { SignUpUseCase } from "../application/usecases/SignUpUseCase";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export const makeSignUpController = () =>
  new SignUpUseController(makeSignUpUseCase());
