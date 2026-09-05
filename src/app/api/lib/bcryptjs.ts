
import bcryptjs from 'bcryptjs'

export const Hash=(password:string)=>{
return bcryptjs.hash(password,10)
}
export const Hashcompare=(front_password:string,backend_password:string)=>{
return bcryptjs.compare(front_password,backend_password)
}
