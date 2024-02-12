import { IUsersRepository } from "../../Domain/Repositories/IUserRepositories"
import jwt  from "jsonwebtoken";
import {env}  from "process";


export class LoginValidateToken_UseCase{

    constructor(private UsersRepository: IUsersRepository) {}

    async ValidateToken(authorization: string){
        
        interface JwtPayload{
            id: string;
        }
        interface typeuser{
            id: String 
            name: String  
            email: String
            password: String
            status: boolean
            createdAt: Date
            updatedAt: Date
        }
        
        
        try {
            const {id} = jwt.verify(authorization, env.JWT_PASS ?? ' ') as JwtPayload

            
            const user = await this.UsersRepository.userexists(id).catch(function(error) {return 'ErrorServer'})
            const {id:id_user, password:_,status, createdAt, updatedAt, ...new_user} = user as typeuser
        

            if(user == 'ErrorServer'){
                return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
            }else if(status == false){
                return ​{status:403, menssage:{"menssage":"Acesso negado."}}
            }else{
                return ​{status:200, menssage:[new_user]}
            }

            
        }catch (error) {
            return ​{status:401, menssage:{"menssage":"Token inválido."}}
        }
        
    } 
}

