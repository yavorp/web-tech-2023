import { Router, response } from 'express';
import authService, { 
    User,
    UserSchema,
    CredentialsSchema,
    Credentials
} from '../service/auth-service';
import { z } from 'zod'
const router = Router();

router.post('/register', async (req, res) => {
    try{
        const data = UserSchema.parse(req.body);
        const user = await authService.register(data);
        res.json(user);
    } catch (error){
        if(error instanceof z.ZodError){
            console.log('From error');
            console.error(error);
            res.sendStatus(400);
        } else {
            throw error;
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = CredentialsSchema.parse(req.body);
        const user = await authService.login(data);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(401);
        }
    } catch(error) {
        if (error instanceof z.ZodError) {
            console.log('From error');
            console.error(error);
            res.sendStatus(400);
        } else {
            throw error;
        }
    }
})

export default router;