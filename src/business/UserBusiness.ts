import { CustomError } from "../customError/CustomError";
import { IdGenerator } from "../services/IdGeneration";
import { UserDTO, InputUserDTO, userLoginDTO } from "../models/User";
import { HashGenerator } from "../services/HashGenerator";
import { UserDatabase } from "../data/UserDataBase";
import { TokenGenerator } from "../services/Authenticator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const userDatabase = new UserDatabase();
const hashGenerator = new HashGenerator()
export class UserBusiness{
public signup = async ({ name, email, password }: InputUserDTO) => {
    try {
        if (!name || !email || !password) {
            throw new CustomError(400, 'Falta algo "');
        }
        if (name.length < 3) {
            throw new CustomError(400, 'Nome curto demais');
        }

        if (password.length <= 6) {
            throw new CustomError(400, 'Senha errada');
        }
        if (!email.includes("@")) {
            throw new CustomError(400, "Email invalido");
        }

        const id = idGenerator.generateId()

        const passwordHash = await hashGenerator.generateHash(password)

        const newUser: UserDTO = {
            id,
            name,
            email,
            password: passwordHash
        }

        await userDatabase.create(newUser)

        const token = tokenGenerator.generateToken({ id })

        return (token)

    } catch (error: any) {
        throw new CustomError(400, error.message);
    }

}
public async login({ email, password }: userLoginDTO): Promise<string> {
    try {
        if (!email || !password) {
            throw console.log("Senha ou email invalidos");
            
        }
        if (!email.includes("@")) {
            throw console.log("Email invalido");
            
        }
        if (password.length <= 5) {
            throw console.log("Senha curta");
            
        }

        const user = await userDatabase.findByEmail(email)

        if (!user) {
            throw console.log("Não encontrado, Ken é você ?");
            
        }

        const comparePassword: boolean = await hashGenerator.compareHash(password, user.password)

        if (!comparePassword) {
            throw console.log("Senha errada não esta certa");
            
        }

        const token = await tokenGenerator.generateToken({ id: user.id })

        return token;

    } catch (error: any) {
        throw new CustomError(400, error.message);
    }
}
getAll = async () => {
    try {
        return await userDatabase.getAll()
    } catch (error: any) {
        throw new Error(error.message || error.sqlMessage);
    }

}
}
