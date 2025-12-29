import {z} from "zod"

export const signinschema = z.object({
    username: z.string().length(6, "Sign-in code must be 6 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})