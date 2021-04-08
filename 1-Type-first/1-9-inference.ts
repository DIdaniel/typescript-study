// * Type Inference

let text = 'hello';
text = 'hi';

let number = 1;
number = 'hello'

// print(message: any) => 기본값으로 string, number 아무거나 다 들어갈 수 있다.
// 그래서 print(message)만 하면 type을 정확하게 하는게 좋다고 ... 이 나온다
function print(message) {
  console.log(message);
}
print('HELLO');
print(1);


// 이렇게 string 지정해도 되고,
function print(message: string) {
  console.log(message);
}
// default 값 넣어서 자동으로 string 지정되게 해도 된다
function print(message='Hello') {
  console.log(message);
}


function add(x: number, y: number) {
  return x + y;
}

const result = add(1, 2);

// ==> 하지만 실제 프로젝트에서 코드가 간단하지 않으므로 타입을 정확하게 명시하는것이 좋다!!

