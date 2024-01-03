let operator = prompt('What do you want to do? (/,+,*,-)');

let num1 = +prompt('Your first number');
num1 = Number(num1);

let num2 = +prompt('Your second number');
num2 = Number(num2);
let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

switch (operator) {
    case '+':
        alert (num1 + ' + ' + num2 + ' = ' + add);
        break;
    case '-':
        alert (num1 + ' - ' + num2 + ' = ' + sub);
        break;
    case '*':
        alert (num1 + ' * ' + num2 + ' = ' + mult);
        break;
    case '/':
        alert (num1 + ' / ' + num2 + ' = ' + div);
}