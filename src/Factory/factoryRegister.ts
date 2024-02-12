import { PrismaUsersRepository }  from "../Domain/Repositories/Prisma/PrismaUsersRepository"
import { RegisterUser_UseCase }   from "../Controller/UseCase/RegisterUser_UseCase"
import { RegisterUserController } from "../Controller/RegisterUser_Controller"

export const createUserFactory = () => {
  const users_Repository       = new PrismaUsersRepository()
  const create_User            = new RegisterUser_UseCase(users_Repository)
  const create_User_Controller = new RegisterUserController(create_User)
  return create_User_Controller
};