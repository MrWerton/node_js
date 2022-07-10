import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUser.useCase";

export class CreateUserController{
    constructor(
        private _createUserUseCase:CreateUserUseCase 
    ){}

    public async handle(req: Request, res: Response): Promise<Response>{
        const {name, age} = req.body;
        this._createUserUseCase.execute({name, age});
        return res.status(201).send()
    }
}