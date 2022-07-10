import { UserRepository } from "../../repositories/implements/User.repository";
import { CreateUserController } from "./CreateUser.controller";
import { CreateUserUseCase } from "./CreateUser.useCase";

export default () =>{
    //single reponsibility
    const userRepository = new UserRepository() //initialize repository;
    const createUserUseCase = new CreateUserUseCase(userRepository); //inject userepository dependency
    const createUserController = new CreateUserController(createUserUseCase); //inject createUseUseCase dependecy
    
    return createUserController
}