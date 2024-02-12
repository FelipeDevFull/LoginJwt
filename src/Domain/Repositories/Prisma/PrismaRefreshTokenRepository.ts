import { prisma } from "../../../Database/client"
import { RefreshToken } from "../../Entities/RefreshToken"
import { User } from "../../Entities/User"
import { IRefreshTokenRepository } from "../IRefreshTokenRepositories"

export class PrismaRefreshTokenRepository implements IRefreshTokenRepository {
  
  async create({expire, userId}: RefreshToken): Promise<RefreshToken> {
    const RefreshtokenData = await prisma.refreshtoken.create({data:{expire, userId}})
    return RefreshtokenData
  }

  async refreshtokenexists(refreshtoken_id: string): Promise<RefreshToken> {
    const RefreshtokenData = await prisma.refreshtoken.findFirst({where:{id:refreshtoken_id}})
    return RefreshtokenData!
  }

  async statuslogin(userId: string, status: boolean): Promise<User> {
    const user = await prisma.user.update({where:{id:userId}, data:{status: status}})
    return user
  }

  async delete(refreshtoken_id: string): Promise<boolean> {
    const user = await prisma.refreshtoken.delete({where:{id:refreshtoken_id}})
    return !!user
  }
}