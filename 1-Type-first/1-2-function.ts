{

  // // JS ❌
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function add(num1:number, num2:number): number {
  //   return num1 + num2;
  // }

  // // JS ❌
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // //TS
  // function jsFetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //JS => TS
  // Optional Parameter : ?
  function printName(firstName:  string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('DAENIL', "KIM");
  printName('DAENIL');
  printName('Anna', undefined)

  // Default parameter
  function printMessage(message: string = 'I am Default') {
    console.log(message);
  }

  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}