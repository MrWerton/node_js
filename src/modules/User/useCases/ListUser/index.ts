import { UserRepository } from "../../repositories/implements/User.repository";
import { ListUserController } from "./ListUser.controller";
import { ListUserUseCase } from "./ListUser.useCase";

export default ()=>{
    //single reponsibility
    console.log('usecase')

    const userRepository = new UserRepository() //initialize repository;
    const listUserUseCase = new ListUserUseCase(userRepository); //inject userepository dependency
    const listUserController = new ListUserController(listUserUseCase); //inject createUseUseCase dependecy

    return listUserController
}

