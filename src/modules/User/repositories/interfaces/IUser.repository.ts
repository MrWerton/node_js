import { UserDTO } from "../../DTO/User.dto";
import { User } from "../../entities/User";

export interface IUserRepository{
    create({name, age}:UserDTO): Promise<void>;
    list(): Promise<User[]>
    findByName(name: string): Promise<User | null>
}