import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

const recipeBusiness = new RecipeBusiness();




export class RecipeController {

    createRecipe = async (req: Request, res: Response) => {

        try {

            const idAuthor = req.headers.authorization as string
            const title = req.body.title as string
            const description = req.body.description as string

            const create = {
                title: title,
                description: description,
                idAuthor: idAuthor
            }

            await recipeBusiness.createRecipe(create)

            res.status(201).send({ message: "Receita cria!" })
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}