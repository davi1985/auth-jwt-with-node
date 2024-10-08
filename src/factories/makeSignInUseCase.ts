import { SignInUseCase } from "../application/usecases/SignInUseCase";
import { SignUpUseCase } from "../application/usecases/SignUpUseCase";

export const makeSignInUseCase = () => new SignInUseCase();
