import { z } from "zod";

export const registerSchema = z.object({
    name: z.string({ required_error: "Username is required!" }).min(7, { message: "Must be 7 or more characters long"}),
    email: z.string({ required_error: "Email is required!" }).email({ message: "Must be a valid email" }),
    password: z.string({ required_error: "Password is required!" })
    .regex(/[a-z]/, "Must contain at least 1 lowercase letter")
    .regex(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .regex(/\d/, "Must contain at least 1 number")
    .regex(/\W|_/, "Must contain at least 1 special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
});