import { UserDatabase } from "../data/UserDataBase";
import { CustomError } from "../customError/customError";
import { UserDTO, InputUserDTO, AuthenticationData } from '../models/userDto';
import { HashGenerator } from "../services/HashGenerator";
import { IdGenerator } from "../services/IdGeneration";
import { TokenGenerator } from "../services/TokenGenerator";



const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const userDatabase = new UserDatabase();
const hashGenerator = new HashGenerator();
export class UserBusiness {

    public signup = async ({ name, email, password }: InputUserDTO) => {
        try {
            if (!name || !email || !password) {
                throw new CustomError(400,'Preencha os campos "name", "email" e "password"');
            }
            if(name.length < 4){
                throw new CustomError(400,'Nome muito curto');
            }

            if(password.length <= 6){
                throw new CustomError(400,'Senha errada, try again');
            }
            if (!email.includes("@")) {
                throw new CustomError(400, "Email invalido");
            }

            const  id = idGenerator.generateId()

            const passwordHash = await hashGenerator.generateHash(password)

            const newUser:UserDTO = {
                id,
                name,
                email,
                password: passwordHash
            }

            await userDatabase.create(newUser)

            const token = tokenGenerator.generateToken({id})

            return (token)

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }

    }
}