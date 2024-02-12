import { User } from "../Entities/User"

export interface IUsersRepository {
  create(userCreate: User): Promise<User>
  emailexists(email: string): Promise<boolean>
  userexists(id: string): Promise<User>
  
}
