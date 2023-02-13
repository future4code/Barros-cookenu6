import { IdGenerator } from '../services/IdGeneration';

export interface UserDTO{
    id: number,
    name: string,
    email: string,
    password: string
}

export interface InputUserDTO{
    name: string,
    email: string,
    password: string
}
export interface AuthenticationData {
    id: string,

 }