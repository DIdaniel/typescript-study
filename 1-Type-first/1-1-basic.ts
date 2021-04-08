{

  // Primitive : number, string, boolean, bigint, symbol, null, undefined

  // Object : function, array......

  // number
  const num:number = -5;

  //string
  const str:string = 'Hello';

  // boolean
  const bool:boolean = true;

  // undefiend : 자료가 들어갈지 아닐지 아직 결정 되지 않음 
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return 1
    // or
    return undefined
  }

  // ❌ null : 자료가 비어있다!!!
  let person2: string | null;

  // ====================================================================

  // ❌ unknown : 어떤 종류의 데이터가 담길지 알 수 없다!
          // : 그래서 number, string, boolean 다 담길 수 있다
          // : 가능하면 사용하지 말고 구체적인 데이터를 명시하는 것이 좋다
  let notSure: unknown = 0;
  notSure = 'Hi';
  notSure = true;

  // ❌ any : number, string 등 무엇이든 할당 할 수 있다.
  //       : 가능하면 사용하지 말고 구체적인 데이터를 명시하는 것이 좋다
  let anything:any = 0
  anything = 'HELLO'

  // void : 함수에서 아무것도 return 하지 않는 것(텅텅 빈?)
  //      : 변수에 선언되는 것은 극히 드물다 => undefined 밖에 선언 할 수 없어서 활요이 떨어진다
  //      : 회사의 스타일마다 생략 할 수 있다
  function print(): void {
    console.log('Hello');
    return;
  }

  let unusable: void = undefined // ❌

  // never : Application에서 예상치 못한, 핸들링 할 수 없는 문제가 발생했을 때 호출 할 수 있는 함수
  //       : 다른 것을 return 할 수 없다
  function throwError(message: string): never {
    // message -> server에 log를 남기고,
    throw new Error(message); // Error를 던지게 하던지

    or

    while(true) { } // while문을 돌면서 끝나지 않도록 작성해야한다

    //❌ object : 원시 타입을 제외한 어떠한 object나 Array를 넣을 수 있다
    //           : 가능한 정확한 object를 명시해서 사용하는 것이 좋다
    let obj: object;
    function appectSomeObject(obj: object) {}
    appectSomeObject({ name : 'DANIEL' })
    appectSomeObject({ animal : 'CAT' })
  }

}