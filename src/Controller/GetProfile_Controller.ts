import { Request, Response } from "express"
import { Getprofile_UseCase } from "./UseCase/Getprofile_UseCase"

export class  GetProfileController{

    constructor(private Getprofile_UseCase: Getprofile_UseCase) {}

    async profile(req: Request, res: Response){
        const {authorization} = req.headers
        if(!authorization)
        {
            res.status(422).json({menssage:"Dados incompletos."})
            return
        }

        try {

            const UserData = await this.Getprofile_UseCase.execute(authorization)
            
            ​let result_stringify = JSON.stringify(UserData)
            
            let result_obj = JSON.parse(result_stringify)
            res.status(result_obj.status).json(result_obj.menssage)
            
        } catch (error) {
            res.status(500).json({message:"Servidor encontrou um erro. Tente novamente mais tarde."})
        }

    } 
}