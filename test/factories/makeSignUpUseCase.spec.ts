import { SignUpUseCase } from "../../src/application/usecases/SignUpUseCase";
import { makeSignUpUseCase } from "../../src/factories/makeSignUpUseCase";

describe("makeSignUpUseCase", () => {
  it("should return instance of SignUpUseCase", () => {
    const signUpUseCase = makeSignUpUseCase();

    expect(signUpUseCase).toBeInstanceOf(SignUpUseCase);
  });
});
