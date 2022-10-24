function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result: number = n1 + n2
    if(showResult){
        console.log(phrase + result)
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.7;
const showResult = true
const phrase = 'The Result is: '

const result = add(number1,number2, showResult, phrase);


const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [string, number];
} = {
    name: 'ilke',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: ['String', 20] 
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

let newTuple: [string, number] = ['as', 20]
// newTuple[1] = 'asd'; // -> Not allowed, type checked
// newTuple = ['asd',20,10] // -> Not allowed, length checked
newTuple.push('admin') // -> allowed, This is the down side

console.log(newTuple);
