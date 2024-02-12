import { User } from "../Entities/User"
import { RefreshToken } from "../Entities/RefreshToken"

export interface IRefreshTokenRepository {
  create(Createrefreshtoken: RefreshToken): Promise<RefreshToken>
  refreshtokenexists(refreshtoken_id: string): Promise<RefreshToken>
  statuslogin(userId: string, status: boolean): Promise<User>
  delete(refreshtoken_id: string): Promise<boolean>
}