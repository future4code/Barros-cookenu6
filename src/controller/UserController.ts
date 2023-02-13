import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../customError/customError";
import { InputUserDTO, UserDTO } from "../models/userDto";


const userBusiness = new UserBusiness()

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const insert: InputUserDTO = {
                name,
                email,
                password
            }

            const token = await userBusiness.signup(insert)

            res.status(201).send(`access_token: ${token} `);

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}