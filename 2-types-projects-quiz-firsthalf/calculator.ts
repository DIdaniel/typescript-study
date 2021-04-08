/**
 * Let's make a calculator 🧮
 */

// type Cal = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

// function calculate(cal: Cal, x: number, y: number) {
//   switch 

//   if('add') {
//     return x + y
//   } else if ('subtract') {
//     return x - y
//   } else if ('multiply') {
//     return x * y
//   } else if ('divide') {
//     return x / y
//   } else if ('remainder') {
//     return x % y
//   } else (null)
// }

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, x: number, y: number): number {
  switch(command) {
    case 'add':
      return x + y;
    case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    case 'remainder':
      return x % y
      default:
        throw new Error('unkown error');
  }
}