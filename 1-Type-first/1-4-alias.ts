{

  // Type Aliases : 새로운 타입을 내가 정의 할 수 있다

  // 원시 타입
  type Text = string;
  type Num = number;
  // 오브젝트 타입도 쌉가능!!!!
  type Student = {
    name: string;
    age: number;
  };

  const name: string = 'Daniel';
  const name2: Text = 'Kiana';

  const phone: Num = 01012345678

  const animals:  Student = {
    name: 'Animal',
    age: 12
  };


  // String Literal Types : 문자열도 타입으로 지정 할 수 있다

  type Name = 'name';
  let myName: Name;
  myName = 'name'

  type JSON = 'json';
  const json: JSON = 'json';

  type Bool = true;
  // const isCat: Bool = false; // Error

}