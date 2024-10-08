import { SignUpUseCase } from "../application/usecases";

const SALT = 10;
export const makeSignUpUseCase = () => new SignUpUseCase(SALT);
