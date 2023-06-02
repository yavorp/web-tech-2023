import { Router, response } from 'express';
import authService, { User } from '../service/auth-service';
const router = Router();

router.post('/register', async (req, res) => {
    const data: User = req.body;
    console.log(data);
    const user = await authService.register(data);
    res.json(user);
});

router.post('/login', async (req, res) => {
    const data: {email: string, password: string} = req.body;
    const user = await authService.login(data);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(401);
    }
})

export default router;