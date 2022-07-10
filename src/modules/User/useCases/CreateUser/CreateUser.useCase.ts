import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
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

    public async execute({name, age}: IRequest): Promise<void>{
        const userAlreadyExists = await this._userRepository.findByName(name)
        if(userAlreadyExists){
             throw new AppError("user already exists!");
        }
        await this._userRepository.create({name,age})
    }
}