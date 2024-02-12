import { prisma } from "../../../Database/client"
import { User } from "../../Entities/User"
import { RefreshToken } from "../../Entities/RefreshToken"
import { ILoginRepository } from "../ILoginRepositories"


export class PrismaLoginRepository implements ILoginRepository {
  
  async exists(email: string): Promise<User> {
    const user  = await prisma.user.findUnique({where:{email}}) as User
    return user
  }

  async refreshtokenexists( userId: string): Promise<boolean> {
    const user = await prisma.refreshtoken.findUnique({where:{userId}})
    return !!user
  }

  async statuslogin(userId: string, status: boolean): Promise<boolean> {
    const user = await prisma.user.update({where:{id:userId}, data:{status: status}})
    return !!user
  }

  async delete(userId: string): Promise<boolean> {
    const user = await prisma.refreshtoken.delete({where:{userId}})
    return !!user
  }

  async create({expire, userId}: RefreshToken): Promise<RefreshToken> {
    const user = await prisma.refreshtoken.create({data:{expire,userId}})
    return user
  }

}
