import { User } from "../Entities/User"
import {RefreshToken} from "../Entities/RefreshToken"

export interface ILoginRepository {
    exists(email: string): Promise<User>
    refreshtokenexists(userId: string): Promise<boolean>
    statuslogin(userId: string, status: boolean): Promise<boolean>
    delete(userId: string): Promise<boolean>
    create(Createrefreshtoken: RefreshToken): Promise<RefreshToken>
}