import { Request, Response } from "express"
import { GenereteRefreshtoken_UseCase } from "./UseCase/GenereteRefreshtoken_UseCase"


export class Refreshtokencontroler{
  
  constructor(private GenereteRefreshtoken_UseCase: GenereteRefreshtoken_UseCase) {}

  
  async refreshToken(req: Request, res: Response) {
    const {refreshtoken} = req.body 
    
    const refreshtoken_id = refreshtoken

    if(!refreshtoken_id)
    {
      res.status(422).json({mensage:"Dados incompletos."})
      return 
    }
    try{
      const RefreshtokenData = await this.GenereteRefreshtoken_UseCase.execute(refreshtoken_id)
      
      ​let result_stringify = JSON.stringify(RefreshtokenData)
      let result_obj = JSON.parse(result_stringify)
      res.status(result_obj.status).json(result_obj.menssage)
      

    }catch (error){
      res.status(500).json({message:"Servidor encontrou um erro. Tente novamente mais tarde."})
      return
    }
  }
}   
