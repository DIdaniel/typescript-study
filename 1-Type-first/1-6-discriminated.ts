{

  // 예) 로그인이라는 함수가 있는데 성공 할 수도 있고, 실패 할 수도 있다.
  //     성공했다면 성공한 network를, 실패했다면 실패한 이유를 보여라

  type SuccessState = {
    result: 'Success!!!';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'FAIL!!!!';
    reason: string;
  };

  type LoginState = SuccessState | FailState

  function login(): LoginState {
    return {
      result: 'Success!!!',
      response: {
        body: 'Succed LOG-IN!',
      }
    }
  }


  // 예2) 위의 SuccessState, FailState를 활용해 printLoginState라는 함수에 state를 담았을 때
  //     console에 나오도록!
  // success => 🎉body
  // fail => 😭 reason

  function printLoginState(state: LoginState) {
      // state.result // success or fail
      if(state.result === 'Success!!!') {
        console.log(`🎉 ${state.response.body}`);
      } else {
        console.log(`😭 ${state.reason}`);
      }
    }

}