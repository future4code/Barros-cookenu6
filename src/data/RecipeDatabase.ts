import { BaseDatabase } from "./BaseDatabase";
import { RecipeDTO } from "../models/Recipe";
import { CustomError } from "../customError/CustomError";
export class RecipeDatabase extends BaseDatabase {
    private static TABLE_NAME: string = "cookenu_recipe"

    create = async ({ id, title, description }: RecipeDTO) => {
        try {

            await RecipeDatabase.connection.insert({
                id,
                title,
                description,
               
            }).into(RecipeDatabase.TABLE_NAME)


        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage);
        }
    }
}