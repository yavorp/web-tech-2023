
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const prisma = new PrismaClient({log: ['query']});

export interface User {
    name: string;
    email: string;
    password: string
}

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