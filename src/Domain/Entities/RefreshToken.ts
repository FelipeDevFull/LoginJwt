export class RefreshToken {
  id?: string      
  expire!:number 
  userId!:string
         
  private constructor({expire, userId}: RefreshToken){
    this.expire = expire
    this.userId = userId
    return{expire, userId}
  }

  static async create({ expire, userId }: RefreshToken) {
    const refreshToken = new RefreshToken({ expire, userId})
    return refreshToken
  }
    
  
}
    