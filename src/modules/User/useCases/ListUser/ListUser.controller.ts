import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUser.useCase";


export class ListUserController{
    public async handle(req: Request, res: Response): Promise<Response>{
    const listUserUseCase = container.resolve(ListUserUseCase);
       const users = await listUserUseCase.execute();
       return res.status(200).json({users})
    }
}