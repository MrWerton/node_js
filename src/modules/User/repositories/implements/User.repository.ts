import { Repository } from "typeorm";
import { dataSource } from "../../../../infra/database";
import { UserDTO } from "../../DTO/User.dto";
import { User } from "../../entities/User";
import { IUserRepository } from "../interfaces/IUser.repository";

export class UserRepository implements IUserRepository{
    private repository: Repository<User>
    constructor(){
        this.repository = dataSource.getRepository(User)
    }

    public async create({name, age}:UserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            age
        })
        await this.repository.save(user)
    }
    public async list(): Promise<User[]>  {
        const users =await this.repository.find()
        return users;
    }

}

