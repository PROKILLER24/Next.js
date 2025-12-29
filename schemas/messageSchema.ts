import {z} from 'zod';

export const messageSchema = z.object({
    content: z.string().min(10, "Message content cannot be empty")
    .max(1000, "Message content cannot exceed 1000 characters"),
})