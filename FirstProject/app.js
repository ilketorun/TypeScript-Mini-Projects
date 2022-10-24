function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.7;
var showResult = true;
var phrase = 'The Result is: ';
var result = add(number1, number2, showResult, phrase);
var person = {
    name: 'ilke',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: ['String', 20]
};
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var newTuple = ['as', 20];
// newTuple[1] = 'asd'; // -> Not allowed, type checked
// newTuple = ['asd',20,10] // -> Not allowed, length checked
newTuple.push('admin'); // -> allowed, This is the down side
console.log(newTuple);
