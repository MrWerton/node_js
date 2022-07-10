import { IUserRepository } from "../../repositories/interfaces/IUser.repository";

export class ListUserUseCase{
    constructor(private _userRepository: IUserRepository){}

    public execute(){
        console.log('uscase')
        return this._userRepository.list();
    }
}