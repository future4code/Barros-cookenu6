export interface UserDTO {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface InputUserDTO {
  name: string,
  email: string,
  password: string
}
export interface userLoginDTO {
  email: string,
  password: string
}