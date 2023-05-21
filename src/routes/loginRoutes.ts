import express  from "express";
import * as  loginService from '../services/loginService'

const routerLogin = express.Router()



routerLogin.post('/',async (req, res) =>{
    try{
        return res.json(await loginService.initialiSession(req.body))
    } catch(e){
        res.status(400).send((<Error>e).message)
    }
})



export default routerLogin