import { ILoginRepository } from "../../Domain/Repositories/ILoginRepositories"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {env}  from "process"
import dayjs from "dayjs"



interface IUserRequest {  
  email:string
  password: string 
}

export class  LoginUser_UseCase{
  
  constructor(private LoginRepository: ILoginRepository) {}

  async execute({email, password}: IUserRequest) {
    
    try {

      const user = await this.LoginRepository.exists(email);
      if(!user){
        return ​{status:422, menssage:"Email ou senha inválidos."}
      }
      const verifypass = await bcrypt.compare(password, user.password)
      if(!verifypass){
        return ​{status:422, menssage:"Email ou senha inválidos."}
      }
      
      const userId = user.id!  
      const RefreshTokenexists = await this.LoginRepository.refreshtokenexists(userId)
      if(RefreshTokenexists) {
        await this.LoginRepository.delete(userId)
      }
      
      
      const status = true
      const AlterStatuLogin = await this.LoginRepository.statuslogin(userId, status)
    

      const token = jwt.sign({id: user.id}, env.JWT_PASS ?? ' ' , {expiresIn: '3m'})
      const expire = dayjs().add(24, 'hours').unix()
      const Create_refreshtoken = await this.LoginRepository.create({expire, userId})
      const{userId:_, expire:timeexpire, ...new_refreshtoken} = Create_refreshtoken
    
      const refreshtoken  = new_refreshtoken.id
      return ​{status:200, menssage:[{token, refreshtoken}]}
      
    } catch (error) {
      return ​{status:422, menssage:"Email ou senha inválidos."}
    } 
    

  }

}