import { Request, Response } from "express"
import { LoginUser_UseCase } from "./UseCase/LoginUser_UseCase"


interface IUserRequest {  
    status?: number
    menssage?:string
}[]

export class LoginUserController {

    constructor(private LoginUser_UseCase: LoginUser_UseCase) {}

    async login(req: Request, res: Response){

        try {
            
            const {email, password} = req.body
            const Userlogin = <IUserRequest> await this.LoginUser_UseCase.execute({email, password})

            ​let result_stringify = JSON.stringify(Userlogin)
            
            let result_obj = JSON.parse(result_stringify)
            if(result_obj.status == 200 )
            {  
               res.status(result_obj.status).json(result_obj.menssage)
            }else{
                res.status(result_obj.status).json({menssage:result_obj.menssage})
            }
            
        }catch (error) {
            res.status(500).json({message:"Servidor encontrou um erro. Tente novamente mais tarde."})
        }
        
    } 
}