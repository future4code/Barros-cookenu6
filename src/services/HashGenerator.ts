import * as bcrypt from "bcryptjs";

export class HashGenerator{
    generateHash = async(plainTest: string):Promise<string> =>{
        const cost:number = Number(process.env.BCRYPT_COST)
        const salt:string = await bcrypt.genSalt(cost)
        const hash:string = await bcrypt.hash(plainTest, salt)

        return(hash)
    }

    compareHash = async(plainTest: string, hashTest: string):Promise<boolean>=>{
        const result = await bcrypt.compare(plainTest, hashTest)

        return (result)
    }
}