
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import { z } from 'zod';
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const prisma = new PrismaClient({log: ['query']});

export const UserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2).max(100),
    // taken from Maria
    password: z.string().min(5).max(15).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
  });

export const CredentialsSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type Credentials = z.infer<typeof CredentialsSchema>;
export type User = z.infer<typeof UserSchema>; 

// export interface User {
//     name: string;
//     email: string;
//     password: string
// }

class AuthService {
    async register({ name, password, email }: User) {
        const pass = await bcrypt.hash(password, SALT_ROUNDS);
        const user = await prisma.user.create({
            data: {
                name,
                password: pass,
                email
            },
            select: {
                name: true,
                email: true
            }
        });
        return user;
    }

    async login({ email, password }: {email: string, password: string}) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        
        if (user) {
            if(await bcrypt.compare(password, user.password)) {
                return user;
            }
        }
        return null;
    }
}

const authService = new AuthService();

export default authService;