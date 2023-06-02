import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import authRouter from './router/user-router';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
dotenv.config();
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const prisma = new PrismaClient({log: ['query']});


// async function main() {
//     const password = await bcrypt.hash('password', 10);
//     const user = await prisma.user.create({
//         data: {
//             name: 'go6o',
//             email: 'go6o@test.com',
//             password,
//             createdMovies: {
//                 create: {
//                     title: 'Drive to survive',
//                     duration: 120,
//                     language: 'EN'
//                 }
//             }
//         },
//         select: {
//             name: true,
//             email: true,
//             createdMovies: true
//         }
//     });
//     console.log(user);
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: 'ypetkov@test.com'
    //     },
    //     include: {
    //         createdMovies: true
    //     }
    // });
    // if (user) {
    //     console.log(await bcrypt.compare('password', user.password))

    // }
    // const movie = await prisma.movie.create({
    //     data: {
    //         title: 'The godfather',
    //         rating: 8,
    //         duration: 180,
    //         addedBy: {
    //             connect: {
    //                 id: 1
    //             }
    //         },
    //         language: 'EN',
    //     },
    //     include: {
    //         addedBy: true
    //     }
    // })

    // const users = await prisma.user.findMany({
    //     where: {
    //         createdMovies: {
    //             none: {
    //                 language: 'ES'
    //             }
    //         }
    //     },
    //     include: {
    //         createdMovies: true
    //     }
    // })
    // console.log(users);
    
// }

// main()
//     .then()
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

dotenv.config();

const PORT = Number(process.env.SERVER_PORT || 8000);
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello from server');
});

app.use('/auth', authRouter);

// app.get('/movie', (request, response) => {
//     response.send('Movies endpoint');
// });

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
