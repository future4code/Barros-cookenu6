import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../models/userDto'

export class TokenGenerator {

    public generateToken = ({id}:AuthenticationData) => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "5h" }
         )
        return token 
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        return {id: payload.id as string}
    }
}