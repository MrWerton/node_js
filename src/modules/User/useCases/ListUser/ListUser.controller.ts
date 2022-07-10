import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUser.useCase";

export class ListUserController{
    constructor(private _listUserUseCase: ListUserUseCase){}

    public async handle(req: Request, res: Response): Promise<Response>{
       const users = await this._listUserUseCase.execute();
       return res.status(200).json({users})
    }
}