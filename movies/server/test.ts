import { z } from "zod";
const mySchema = z.string();

const str = 'a';
console.log(mySchema.parse(str));
const numSchema = z.number().positive().nullish();
const num = -12;
console.log(mySchema.safeParse(num));
console.log(numSchema.safeParse(null));
console.log(numSchema.safeParse(undefined));
// 
const minusNumberSchema = z.number().nonpositive();
console.log(minusNumberSchema.safeParse(num));

const nanExample = z.nan();
const booleanExample = z.boolean();
console.log(booleanExample.parse(1 > 0));

const literalExample = z.literal('tuna');
console.log(literalExample.safeParse('tina'));
console.log(literalExample.safeParse('tuna'));

const pathParams = z.coerce.number()
console.log(pathParams.parse(123));


const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
console.log(FishEnum.safeParse('tuna'));

type FishEnum = z.infer<typeof FishEnum>;
type Num = z.infer<typeof minusNumberSchema>;


const User = z.object({
    email: z.string().email(),
    // taken from Maria
    password: z.string().min(5).max(15).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
  });

type User = z.infer<typeof User>;
const user: User = {
    email: 'yavor@tes.test',
    password: '12Yavor!@'
};

console.log(User.parse(user));


