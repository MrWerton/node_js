import { Router } from "express";
import  createUserController  from "../modules/User/useCases/CreateUser";
import  listUserController from "../modules/User/useCases/ListUser";

const userRouter = Router();

userRouter.get('/', (req, res)=>{
   return listUserController().handle(req, res)
})

userRouter.post('/', (req, res)=>{
    return createUserController().handle(req, res);
})


export {userRouter}