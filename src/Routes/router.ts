import { Router, Request, Response } from "express";
import { createUserFactory } from "../Factory/factoryRegister";


import { Validate } from "../Middleware/ValidateUserRegister";

const Routes = Router()

Routes.post("/v1/user/register", Validate,  (req: Request, res: Response) => createUserFactory().create(req, res))

export default Routes;