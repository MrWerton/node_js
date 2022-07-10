import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUser.useCase";
export class CreateUserController{
    public async handle(req: Request, res: Response): Promise<Response>{
        const {name, age} = req.body;
        const createUserUseCase = container.resolve(CreateUserUseCase)
        createUserUseCase.execute({name, age});
        return res.status(201).send()
    }
}