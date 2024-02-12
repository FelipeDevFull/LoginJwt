import { PrismaRefreshTokenRepository } from "../Domain/Repositories/Prisma/PrismaRefreshTokenRepository"
import { Logout_UseCase }                from "../Controller/UseCase/Logout_UseCase"
import { LogoutController}              from "../Controller/Logout_Controller"

export const LogoutFactory = () => {
    const Refresh_Token_Repository = new PrismaRefreshTokenRepository()
    const Logout_Service           = new Logout_UseCase(Refresh_Token_Repository)
    const Logout_Controller        = new LogoutController(Logout_Service)
    return Logout_Controller
}