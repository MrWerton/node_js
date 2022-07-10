import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/interfaces/IUser.repository";

interface IRequest{
    name: string,
    age: number
}
@injectable()
export class CreateUserUseCase{
    constructor(
        @inject("UserRepository")
        private _userRepository: IUserRepository //dependencyInjector
    ){}

    public execute({name, age}: IRequest){
        this._userRepository.create({name,age})
    }
}