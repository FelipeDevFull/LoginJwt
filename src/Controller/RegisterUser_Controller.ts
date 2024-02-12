import { Request, Response } from "express"
import { RegisterUser_UseCase } from "./UseCase/RegisterUser_UseCase"


export class RegisterUserController {

  
  constructor(private RegisterUser_UseCase: RegisterUser_UseCase) {}

  async create(req: Request, res: Response) {
    try {
      const status = false
      const {name, email, password, confirm_password} = req.body 
      const user = await this.RegisterUser_UseCase.execute({name, email, password, confirm_password, status})
      
      ​let result_stringify = JSON.stringify(user)
            
      let result_obj = JSON.parse(result_stringify)
      res.status(result_obj.status).json(result_obj.menssage)
  
    } catch (error) {
      res.status(500).json({message:"Servidor encontrou um erro. Tente novamente mais tarde."})
      return
    }
    
  }
}        