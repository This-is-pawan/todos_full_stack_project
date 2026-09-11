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
export const create_validation = z.object({
  todolist: z.string(),
  description: z.string(),
  category: z.string(),
  prioity: z.string(),
  due_date: z.union([z.date(), z.string()]),
});
export const edit_validation = z.object({
  todolist: z.string(),
  description: z.string(),
  category: z.string(),
  prioity: z.string(),
  due_date: z.union([z.date(), z.string()]),
});