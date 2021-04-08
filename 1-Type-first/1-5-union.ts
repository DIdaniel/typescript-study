{

  // Union type: OR => 모든 case 중에 하나를 고르는 타입을 만들 때 사용

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction)
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // 예) 로그인이라는 함수가 있는데 성공 할 수도 있고, 실패 할 수도 있다.
  //     성공했다면 성공한 network를, 실패했다면 실패한 이유를 보여라

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'Succed LOG-IN!',
      },
      reason: 'You should put in your passwords'
    }
  }


  // 예2) 위의 SuccessState, FailState를 활용해 printLoginState라는 함수에 state를 담았을 때
  //     console에 나오도록!
  // success => 🎉body
  // fail => 😭 reason

  function printLoginState(state: LoginState) {
      if('response' in state) {
        console.log(`🎉 ${state.response.body}`);
      } else {
        console.log(`😭 ${state.reason}`);
      }
    }
  
    

}