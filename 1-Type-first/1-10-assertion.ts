{

  /*
    ** Type Assertions ❌ : 피하는 것이 좋다
  */

  // 타입을 확인 할 때, 타입을 강요 할 때가 있다

  function jsStrFunc(): any {
    return 'MEHHHHH';
  }

  const result = jsStrFunc();
  result.length

  // 위의 경우 JS의 function은 무조건 any type이다.
  // 그래서 return 값이 string이지만 length 등 문자열에 사용되는 api를 사용하지 못한다
  // 그러나 너무 확실하게 알고 있다면!! Type Assertions를 사용해보자!
  function jsStrFunc2(): any {
    return 'HELLOO';
  }

  const result2 = jsStrFunc2();
  // (result2 as string).length; => 이렇게 강제로 string으로 만들 수 있다!
  // 혹은 <string>result2 => 이렇게 사용도 가능하다!
  console.log((result2 as string).length);
  console.log(<string>result2.length);

  //WRONG!!!!
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ❌ App이 죽는다  

  const button = document.querySelector('class');
  button.nodeValue

}