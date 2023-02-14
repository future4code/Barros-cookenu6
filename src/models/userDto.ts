import { v4 } from 'uuid';


export interface UserDTO{
    id: any,
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
    id: any,

 }