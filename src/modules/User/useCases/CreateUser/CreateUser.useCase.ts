import { IUserRepository } from "../../repositories/interfaces/IUser.repository";

interface IRequest{
    name: string,
    age: number
}
export class CreateUserUseCase{
    constructor(
        private _userRepository: IUserRepository //dependencyInjector
    ){}

    public execute({name, age}: IRequest){
        this._userRepository.create({name,age})
    }
}