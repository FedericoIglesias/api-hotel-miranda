import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'

const routerLogin = express.Router()

routerLogin.post("/", async (req, res) =>{
    passport.authenticate('login', async (error: any, user: any, info: any)=>{
            if(error || !user){
                throw new Error('user not found')
            }
            req.login(
                user,
                { session: false },
                async (error) => {
                  if (error) throw new Error(error);
    
                  const body = { id: user.id, name: user.name };
                  const token = jwt.sign({ user: body }, 'TOP_SECRET');
    
                  return res.json({ token });
                }
              )
                
            
    })
})

export default routerLogin