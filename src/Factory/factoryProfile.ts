import { PrismaUsersRepository }        from "../Domain/Repositories/Prisma/PrismaUsersRepository"
import { LoginValidateToken_UseCase }   from "../Controller/UseCase/LoginValidateToken_UseCase"
import { Getprofile_UseCase }           from "../Controller/UseCase/Getprofile_UseCase"
import { GetProfileController }         from "../Controller/GetProfile_Controller"

export const ProfileFactory = () => {
  const Prisma_Users_Repository = new PrismaUsersRepository()
  const Login_Validate_Token    = new LoginValidateToken_UseCase(Prisma_Users_Repository)
  const Get_profile_Service     = new Getprofile_UseCase(Login_Validate_Token)
  const Get_Profile_Controller  = new GetProfileController(Get_profile_Service)
  return Get_Profile_Controller
};