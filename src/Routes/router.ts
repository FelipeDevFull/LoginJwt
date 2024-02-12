import { Router, Request, Response } from "express";
import { createUserFactory } from "../Factory/factoryRegister"
import { LoginUserFactory } from "../Factory/factoryLogin"
import { ProfileFactory } from "../Factory/factoryProfile"
import { RefreshtokenFactory } from "../Factory/factoryRefreshtoken"
import { LogoutFactory } from "../Factory/factoryLogout"

import { Validate } from "../Middleware/ValidateUserRegister";

const Routes = Router()

Routes.post("/v1/user/register", Validate,  (req: Request, res: Response) => createUserFactory().create(req, res))
Routes.post("/v1/user/login", (req: Request, res: Response) => LoginUserFactory().login(req, res))
Routes.get("/v1/user/profile", (req: Request, res: Response) => ProfileFactory().profile(req, res))
Routes.post("/v1/user/refreshtoken", (req: Request, res: Response) => RefreshtokenFactory().refreshToken(req, res))
Routes.post("/v1/user/logout", (req: Request, res: Response) => LogoutFactory().logout(req, res))

export default Routes;