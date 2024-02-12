import bcrypt from "bcrypt";

export class User {
  id?: string
  name!: string             
  email!: string         
  password!: string
  status!: boolean
  createdAt?: Date
  updatedAt?: Date

 private constructor({name, email, password, status}: User){
    this.name = name 
    this.email = email
    this.password = password
    this.status = status
  }

  
  static async create({ name, email, password, status }: User) {
    const hashpassword = await bcrypt.hash(password, 8)
    const user = new User({name, email, password:hashpassword, status})
    return user
  }
}
  