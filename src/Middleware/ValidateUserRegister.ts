import { NextFunction, Request, Response } from "express";

function Validate(req: Request, res: Response, next: NextFunction) {
  
    const {name, email, password, confirm_password} = req.body


    if(!name){
        res.status(422).json({menssage:'O nome é obrigatório'})
        return
    }


    let email_mask = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email_mask.test(email)) {
        res.status(422).json({menssage:'Insira um e-mail no padrão nome@dominio.com'})
        return
    }  


    if(password != confirm_password)
    {
        res.status(422).json({menssage:'Password e confirm_password devem ter valores iguais.'})
        return
    }

    next()
        
}
export {Validate}

  