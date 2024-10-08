import express, { RequestHandler } from "express";

import {
  makeAuthenticationMiddleware,
  makeListLeadsController,
  makeSignInController,
  makeSignUpController,
} from "../factories";

import { middlewareAdapter, routeAdapter } from "./adapters";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.get(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()) as RequestHandler,
  routeAdapter(makeListLeadsController())
);

app.listen(3001, () => console.log("Server started at http://localhost:3001"));
