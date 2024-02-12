import { Request, Response } from "express"

import { Logout_UseCase } from "./UseCase/Logout_UseCase"

export class LogoutController{
  
  constructor(private Logout_UseCase: Logout_UseCase) {}

    async logout(req: Request, res: Response) {
        const {refreshtoken} = req.body 

        const refreshtoken_id = refreshtoken
       
        if(!refreshtoken_id)
        {
          res.status(422).json({mensage:"Dados incompletos."})
          return
        }
        try{
          const RefreshtokenData = await this.Logout_UseCase.execute(refreshtoken_id)
          
          ​let result_stringify = JSON.stringify(RefreshtokenData)

          let result_obj = JSON.parse(result_stringify)
          res.status(result_obj.status).json({menssage:result_obj.menssage})
        }catch (error){
          res.status(500).json({mensage:"Servidor encontrou um erro. Tente novamente mais tarde."})
        }
    }
}
