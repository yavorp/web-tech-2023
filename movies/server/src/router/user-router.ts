import { Router, response } from 'express';

const router = Router();
interface User {
    id: number;
    name: string
}

let lastId = 3;

let users: User[] = [
    {
        id: 1,
        name: 'Yavor'
    },
    {
        id: 2,
        name: 'Ivan'
    },
    {
        id: 3,
        name: 'Go6o'
    }
];

router.get('/', (request, response) => {
    const nameFilter = request.query.name;
    if (nameFilter && typeof(nameFilter) === 'string') {
        const result = users.filter(({ name }) => name === nameFilter);
        response.json(result);
    } else if(nameFilter && nameFilter instanceof Array) {
        const parsedFilter = nameFilter as string[];
        const result = users.filter(({ name }) => parsedFilter.find((n: string) => n === name));
        if (result.length === 0) {
            response.sendStatus(404);
        }
        response.json(result);
    } else {
        response.json(users);
    }
    console.log('Yavor');
});

router.post('/', (req, res) => {
    console.log(req.body);
    const body = req.body;
    if (body.name && body.name instanceof String) {
        const user: User = {
            name: body.name,
            id: lastId
        };
        lastId ++;
        users = [...users, user];
        res.json(user).status(200);
    } else {
        res.statusMessage = 'Missing namme';
        res.status(400);
    }
    
})


export default router;
