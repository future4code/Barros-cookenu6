import { CustomError } from "../customError/customError";
import { UserDTO } from "../models/userDto";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME= "Cookenu_users"

    create = async ({id,name,email,password}:UserDTO):Promise<void>=>{
        try{
            await UserDatabase.connection
            .insert({
                id,
                name,
                email,
                password
            }).into(UserDatabase.TABLE_NAME)

        }catch(error:any){
            throw new CustomError(400, error.message);
        }
    }
}