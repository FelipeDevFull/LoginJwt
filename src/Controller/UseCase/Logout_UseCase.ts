import {IRefreshTokenRepository } from "../../Domain/Repositories/IRefreshTokenRepositories"

export class Logout_UseCase{
    
   constructor(private  RefreshTokenRepository: IRefreshTokenRepository) {}

    async execute(refreshtoken_id:string) {
        
        try {
            const status = false
            const RefreshTokenexists = await this.RefreshTokenRepository.refreshtokenexists(refreshtoken_id)
            if(RefreshTokenexists) {
                const {userId} = RefreshTokenexists
                await this.RefreshTokenRepository.statuslogin(userId, status)
                return ​{status:200, menssage:"Logout."}
            }else{
                return ​{status:401, menssage:"Token inválido."}
            }
           
        }catch (error) {
            return ​{status:500, menssage:"Servidor encontrou um erro. Tente novamente mais tarde."}
        }
    }
  
}