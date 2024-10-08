import { IController, IRequest, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        accountId: request.accountId,
        leads: [
          { id: "1", name: "Steve Vai" },
          { id: "1", name: "Joe Satriani" },
          { id: "1", name: "John Petrucci" },
        ],
      },
    };
  }
}
