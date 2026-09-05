import {z} from  'zod'
export const register_validation=z.object({
 name:z.string().trim().min(3,'min 3 char'),
 email:z.string().trim().email(),
 password:z.string().trim().min(6,'min 6 char'),
})
export const login_validation=z.object({
 email:z.string().trim().email(),
 password:z.string().trim().min(6,'min 6 char'),
})
