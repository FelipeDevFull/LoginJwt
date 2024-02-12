import { User } from "../../Domain/Entities/User"
import { IUsersRepository } from "../../Domain/Repositories/IUserRepositories";

interface IUserRequest {
  name: string,  
  email:string, 
  password: string, 
  confirm_password: string
  status: boolean
}

export class RegisterUser_UseCase{
  
  constructor(private UsersRepository: IUsersRepository) {}

  async execute({ name, email, password, confirm_password, status}: IUserRequest) {
    try {
      const EmailExists = await this.UsersRepository.emailexists(email)
      if (EmailExists) {
        return ​{status:400, menssage:{"menssage":"Esse email já foi cadastrado."}}
      }
     
      const userCreate = await User.create({ name, email, password, status})      
      const userData = await this.UsersRepository.create(userCreate)
      const {id, password:_, createdAt,updatedAt,status:statuss,  ...user} = userData
      return ​{status:201, menssage:[user]}

    }catch (error) {
      return ​{status:500, menssage:{"menssage":"Servidor encontrou um erro. Tente novamente mais tarde."}}
    }

  }

}