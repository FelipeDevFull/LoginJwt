import { PrismaLoginRepository } from "../Domain/Repositories/Prisma/PrismaLoginRepository"
import { LoginUser_UseCase }             from "../Controller/UseCase/LoginUser_UseCase"
import { LoginUserController }   from "../Controller/LoginUser_Controller"

export const LoginUserFactory = () => {
  const Prisma_Login_Repository      = new PrismaLoginRepository()
  const Login_User                   = new LoginUser_UseCase(Prisma_Login_Repository)
  const LoginUser_Controller         = new LoginUserController(Login_User)
  return LoginUser_Controller
};