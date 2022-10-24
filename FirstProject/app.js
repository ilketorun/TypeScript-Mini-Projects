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
