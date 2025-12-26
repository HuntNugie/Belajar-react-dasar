import { compare,hash } from "bcrypt";
import { config } from "dotenv";
config();

const salt = parseInt(process.env.SALT_HASH);

export const hashPassword = async(string)=>{
    const enkripsi =  await hash(string,salt);
    return enkripsi
}

export const cekPassword = async(string,hashString)=>{
    const match = await compare(string,hashString);
    return match
}
