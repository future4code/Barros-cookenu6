import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../customError/CustomError";
import { InputRecipeDTO } from "../models/Recipe";
import { AuthenticationData } from "../models/AuthenticatorData";
import { IdGenerator } from "../services/IdGeneration";
import { TokenGenerator } from "../services/Authenticator";

const tokenGenerator = new TokenGenerator();
const idGenerator = new IdGenerator();
const recipeDatabase = new RecipeDatabase();

export class RecipeBusiness {

    createRecipe = async (input: InputRecipeDTO) => {
        try {

            const { title, description, idAuthor } = input

            if (!title || !description) {
                throw new CustomError(400, 'Fill in the fields "title" and "description"');
            }

            const idUser = tokenGenerator.tokenData(idAuthor)

            const id = idGenerator.generateId()

            await recipeDatabase.create({
                id: id,
                title: title,
                description: description,
                idAuthor: idUser.id
            })

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }}