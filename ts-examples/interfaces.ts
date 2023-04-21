// Съставни типове
const arr: readonly number[] = [1,2,4,5];

// В TS използваме основно структурно типизиране --- Duck Typing
// Самото типизиране най-често се случва с интерфейси и типове

type NamedType = {
    name: string;
}

interface BasePerson {
    name: string;
}

function greet(person: NamedType) {
    console.log(`Hello! I am ${person.name}`);
}

const yavor = {name: 'Yavor', age: 25 };
greet(yavor);
// vs
// greet({name: 'Yavor', age: 25 })

interface Person extends BasePerson {
    age: number;
}

// Type intersection
type PersonType = NamedType & {
    age: number;
};

const asdf: PersonType = {
    age: 1,
    name: 'Yavor'
}


// function welcomeMessage(arg) {
//     if(arg.type === 'guest') {
//         return 'Sign Up';
//     } else {
//         return `Hello ${arg.name}`
//     }
// }


export {}