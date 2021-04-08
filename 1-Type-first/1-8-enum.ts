{
  // ** Enum
  // enum(이넘)은 다른 프로그래밍 언어에서도 자주 사용된다
  // 여러가지의 관련 된 상수 값들을 한 곳에 모아서 정의 할 수 있도록 한다

  // 🐹 JS SECTION
  // JS에는 존재하지 않는다!

  // JS에서는 변하지 않는 값을 대문자로 지정 할 수 있다
  const MAX_NUM = 6;  // 최대값
  const MAX_STUDENTS_PER_CLASS = 10;  //한 반 당 최대 학생 수

  // 그런데 아래와 같이 연관 된 것들이 있는데 이들을 묶을 수 있는 타입이 없다.
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  // JS에서 최대한 Enum과 비슷하게 쓰려면 freeze 라는 api를 써서 오브젝트를
  // 한번만 정의 할 수 있게, 수정이 불가하게 만드는 방법을 사용한다.
  const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDNESDAY": 2});

  const dayOfToday = DAYS_ENUM.MONDAY;

  console.log(dayOfToday); // 0


  /////////////////////////////////////////

  // 🐖 TS SECTION 
  // : ❌ 가능한 사용하지 않는 것이 좋다(mobile client와 소통 할 일이 없다면, Web에서만 사용 할 거라면)

  // enum에서는 DAYS라고 다 대문자 x => Days 맨 앞글자만 대문자!

  // 아무것도 지정해주지 않으면 기본값으로 Monday부터 0이 시작된다
  // 만약 지정해주고 싶다면 Monday = 1, Monday = 'monday' 라고 number, string 상관 없이 할당하면 된다
  // 단, string은 다음에 뭐가 올지 모르기 때문에 수동적으로 하나하나 지정해줘야한다
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday)
  const day = Days.Saturday;
  console.log(day);

  // Q. 왜 사용 하지 않는 것이 좋을까?
  // A. Enum으로 지정된 타입의 변수에 다른 숫자도 할당 할 수 있고, 이는 compile error가 나지 않는다
  //    또한 type이 정확하게 보장되지 않는다.
  console.log(Days.Tuesday)
  const day = Days.Saturday;
  day = 10; //=> 이런 식으로 할당할 수 있다
  console.log(day);

  //    Enum 밖에 방법이 없다면 사용해야겠지만 이를 사용하지 않고
  //    Union type을 통해서 관련 된 값들을 묶고, 하나만 사용 할 수 있다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  let dayWeek: DaysOfWeek = 'Monday';
  dayWeek = 'Mehhh' // <= 이렇게 error가 발생한다!

}