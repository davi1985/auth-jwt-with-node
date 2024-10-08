import { Request, Response } from "express";

import { IController } from "../../application/interfaces";

export const routeAdapter =
  (controller: IController) => async (request: Request, response: Response) => {
    const { statusCode, body } = await controller.handle({
      body: request.body,
      params: request.params,
      accountId: request.metadata.accountId,
    });

    response.status(statusCode).json(body);
  };
