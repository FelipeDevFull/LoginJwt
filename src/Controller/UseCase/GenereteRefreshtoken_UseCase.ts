import {IRefreshTokenRepository } from "../../Domain/Repositories/IRefreshTokenRepositories"
import {IUsersRepository } from "../../Domain/Repositories/IUserRepositories"
import { RefreshToken } from "../../Domain/Entities/RefreshToken"
import dayjs from "dayjs"
import jwt from "jsonwebtoken"
import {env}  from "process"


export class GenereteRefreshtoken_UseCase{
    
   constructor(private  RefreshTokenRepository: IRefreshTokenRepository, private  UsersRepository: IUsersRepository) {}

    async execute(refreshtoken_id:string) {

        try {
            
            let userId

            const expire = dayjs().add(24, 'hours').unix()
            const RefreshTokenexists  = await this.RefreshTokenRepository.refreshtokenexists(refreshtoken_id)
            if(RefreshTokenexists){
                userId = RefreshTokenexists.userId
                const {status} = await this.UsersRepository.userexists(userId)
                if(status == false)
                {   
                    return ​{status:403, menssage:{"menssage":"Acesso negado."}}
                }
                await this.RefreshTokenRepository.delete(refreshtoken_id)
            }else{
                return ​{status:401, menssage:{"menssage":"Refresh token inválido."}}
            }
           
            
            const RefreshtokenCreate = await RefreshToken.create({ expire, userId})
            const RefreshtokenData = await this.RefreshTokenRepository.create(RefreshtokenCreate)        
            const{userId:_, expire: timeexpire, ...new_refreshtoken} = RefreshtokenData
            const token = jwt.sign({id: RefreshTokenexists.userId}, env.JWT_PASS ?? ' ' , {expiresIn: '3m'})
            const refreshtoken  = new_refreshtoken.id
            return ​{status:200, menssage:[{token, refreshtoken}]}
            
        } catch (error) {
            return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
        }
      
    }
  
}