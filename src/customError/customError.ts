export class CustomError extends Error {
    constructor(_statusCode: number, message: string){
        super(message)
    }
}