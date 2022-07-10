import { Router } from "express";
import { CreateUserController } from "../modules/User/useCases/CreateUser/CreateUser.controller";
import { ListUserController } from "../modules/User/useCases/ListUser/ListUser.controller";

const userRouter = Router();
const createUserController = new CreateUserController()
const listUserController = new ListUserController()

userRouter.get('/', listUserController.handle)

userRouter.post('/', createUserController.handle)


export {userRouter}