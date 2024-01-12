import React from "react";
import StyledStudy from "./styled";

const { Container } = StyledStudy;

// Promise와 async, await를 학습하기 앞서
// 비동기와 동기를 알아야한다.

// 1. 동기 vs 비동기
// 동기는 직렬적으로 작동하는 방식이고 비동기는 뱡렬적으로 작동하는 방식이다 즉 특정 코드가 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행을 한다.

// 동기란 무엇인가?
// 1.직렬적으로 태스크를 실행을 하는 방식
// 2.즉 요청을 보낸 후 응답을 받아야지만 작동을 하는 방식, 어떠한 테스크를 처리하는 동안 나머지 테스크들은 대기한다.
// 3.실제로 cpu가 느려지는 거는 아니지만 업무효율이 떨어진다.

// 비동기란 무엇인가?
// 1.병렬적으로 태스크를 수행하는 방식이다
// 2.요청을 보낸 후 응답의 수락 여부와 상관 없이 다음 태스크가 작동하는 방식이다. a테스크가 작동하는 동안 b테스크도 같이 할 수 있어 자원을 효율적으로 사용할 수 있다.
// 3.이때, 비동기 요청시 응답 후 처리할 콜백 함수를 함께 알려준다. 즉 해당 테스크가 완료시 콜백 함수를 호출한다.

// 문제는 비동기 처리시 단점이 발생
// 1.비동기를 처리 위해 콜백 패턴을 사용하면 처리 순서를 보장하기 위해 여러 콜백이 중첩되어 복잡도가 높아지므로 콜백 헬이 발생을 한다.
// 2.콜백헬은 가독성이 나쁘므로 실수 발생 이를 해결하기 위해 Promise등장

//프로미스

const 프로미스 = new Promise((resolve, reject) => {
  //resolve(파라미터1) === 성공을 판별하는 함수 then에 성공 파라미터 값을 전달 성공이라흔 함수 실행시 성고 실행
  //reject(파라미터2) === 실패를 판별하는 함수 실패 파라미터 값도 전달 실패라는 함수 실행시
});
//비동기 처리를 할 수 있는다 일단 선언
//성공 실패 판정기계  ~~~일 경우 성공, ~~~일 경우 실패

프로미스
  .then((/**파라미터1 */) => {
    //파라미터1 전달
  })
  .then(() => {})
  .catch((/**파라미터2 */) => {
    /**파라미터2 전달 */
  })
  .finally(() => {
    //성공이든 실패든 끝나고 실행
  });

//then으로 순차적으로 실행 성공 함수
//실패시 catch 안에 값 실행

//순차적으로 실행할 때 콜백 대신 사용할 수 있는 함수
//이거 왜 쓰냐고? 코드 깔끔하게 보려는 디자인 패턴

//이것도 싫으면 async/await

//async 키워드를 쓰면 promise 자동 생성 함수 앞에
//await은 프로미스가 끝나면 실행하라는 뜻 즉 then

async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공(결과);
  });
  // asyncv성공 판별이 필요한 경우
  try {  var 결과 = await 어려운연산 }
  catch { /** 실패할 경우 */ }
}
더하기();

const Promise_Async_Await = () => {
  return <Container></Container>;
};

export default Promise_Async_Await;
