import { prisma } from "../../../Database/client"
import { User } from "../../Entities/User"
import { IUsersRepository } from "../IUserRepositories"

export class PrismaUsersRepository implements IUsersRepository {
  
  async create({name, email, password, status}: User): Promise<User> {
    const user = await prisma.user.create({data:{name, email, password, status}})
    return user
  }
  
  async emailexists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({where:{email}})
    return !!user
  }

  async userexists(id: string): Promise<User> {
    const user = await prisma.user.findUnique({where:{id}})
    return user!
  }


}
