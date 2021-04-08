{

  // 1. Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 3, 5];
    // readonly : string을 이용해야하며 변경불가(object의 불변성 보장)
  function printArray(fruits: readonly string[]) {
  

  // ❌ 2. Tuple(튜플) : 서로 다른 타입을 함께 가질 수 있는 배열
  //            : 왠만하면 사용하지 말고, interface, type alias, class 등으로 대체하여 사용할 것
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123

  const [name, age] = student; // => Object destructoring 하면 괜찮지만 번거롭다 -> useState와 비슷?!

  }

}