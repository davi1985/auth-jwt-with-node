import { SignUpUseCase } from "../application/usecases/SignUpUseCase";

const SALT = 10;
export const makeSignUpUseCase = () => new SignUpUseCase(SALT);
