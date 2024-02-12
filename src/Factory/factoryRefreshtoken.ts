import { PrismaRefreshTokenRepository } from "../Domain/Repositories/Prisma/PrismaRefreshTokenRepository"
import { PrismaUsersRepository } from "../Domain/Repositories/Prisma/PrismaUsersRepository"
import { GenereteRefreshtoken_UseCase }         from "../Controller/UseCase/GenereteRefreshtoken_UseCase"
import { Refreshtokencontroler }        from "../Controller/Refreshtoken_Controller"


export const RefreshtokenFactory = () => {
  const RefreshTokenRepository = new PrismaRefreshTokenRepository()
  const UsersRepository        = new PrismaUsersRepository()
  const Generete_RefreshToken  = new GenereteRefreshtoken_UseCase(RefreshTokenRepository, UsersRepository)
  const Refreshtoken_controler = new Refreshtokencontroler(Generete_RefreshToken)
  return Refreshtoken_controler
};