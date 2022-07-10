import { injectable, inject} from "tsyringe";
import { IUserRepository } from "../../repositories/interfaces/IUser.repository";

@injectable()
export class ListUserUseCase{
    constructor(
        @inject('UserRepository')
        private _userRepository: IUserRepository
        ){}

    public execute(){
        return this._userRepository.list();
    }
}