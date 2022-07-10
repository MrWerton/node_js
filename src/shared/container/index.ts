import { container } from "tsyringe";
import { UserRepository } from "../../modules/User/repositories/implements/User.repository";
import { IUserRepository } from "../../modules/User/repositories/interfaces/IUser.repository";

//build a singleton
container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)