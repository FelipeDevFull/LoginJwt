import { LoginValidateToken_UseCase } from "./LoginValidateToken_UseCase"


export class Getprofile_UseCase{

    constructor(private LoginValidateToken_UseCase: LoginValidateToken_UseCase) {}

    async execute(authorization: string){
         
        const token = authorization.split(' ')[1]     

        try {
            const user = await this.LoginValidateToken_UseCase.ValidateToken(token) 
            return user
           
        }catch (error) {
            return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
        }
        
    } 
}