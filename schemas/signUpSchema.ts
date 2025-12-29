import {z} from 'zod';

export const usernameValidation = z.string()
.min(2,"username must be at least 2 charcter s long ")
.max(40,"usrnmae should be less than 30 charcters")
.regex(/^[a-zA-Z0-9_]+$/,"username can only contain letters, numbers, and underscores");    


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string()
    .min(2,"password must be at least 8 characters long")
    .max(40,"password should be less than 100 characters")
})