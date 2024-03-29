import { Router, Request, Response } from "express";
import { createUserFactory } from "../Factory/factoryRegister"
import { LoginUserFactory } from "../Factory/factoryLogin"
import { ProfileFactory } from "../Factory/factoryProfile"
import { RefreshtokenFactory } from "../Factory/factoryRefreshtoken"
import { LogoutFactory } from "../Factory/factoryLogout"

//swagger
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

import { Validate } from "../Middleware/ValidateUserRegister";

const Routes = Router()

Routes.post("/v1/user/register", Validate,  (req: Request, res: Response) => createUserFactory().create(req, res))
Routes.post("/v1/user/login", (req: Request, res: Response) => LoginUserFactory().login(req, res))
Routes.get("/v1/user/profile", (req: Request, res: Response) => ProfileFactory().profile(req, res))
Routes.post("/v1/user/refreshtoken", (req: Request, res: Response) => RefreshtokenFactory().refreshToken(req, res))
Routes.post("/v1/user/logout", (req: Request, res: Response) => LogoutFactory().logout(req, res))

//swagger
Routes.use('/v1/user/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//Redocly
Routes.get('/v1/user/api-docs',(req: Request, res: Response) => {
  return res.sendFile(process.cwd() + '\\'+'src'+'\\'+'swagger.json')
})
Routes.get('/v1/user/redocly',(req: Request, res: Response) => {
  return res.sendFile(process.cwd() + '\\'+'src'+'\\'+'index.html')
})

export default Routes;