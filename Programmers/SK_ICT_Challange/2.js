// 자연수 n과 시계/반시계 방향을 결정하는 boolean 값 clockwise가 주어집니다. 입출력 예 설명의 그림과 같이 소용돌이 모양(clockwise가 참이면 시계방향, 거짓이면 반시계방향)으로 n x n 정수 배열을 채워 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 1,000 이하입니다.
// 입출력 예(파이썬을 제외한 언어)
// n	clockwise	result
// 5	true	[[1,2,3,4,1],[4,5,6,5,2],[3,6,7,6,3],[2,5,6,5,4],[1,4,3,2,1]]
// 6	false	[[1,5,4,3,2,1],[2,6,8,7,6,5],[3,7,9,9,8,4],[4,8,9,9,7,3],[5,6,7,8,6,2],[1,2,3,4,5,1]]
// 9	false	[[1,8,7,6,5,4,3,2,1],[2,9,14,13,12,11,10,9,8],[3,10,15,18,17,16,15,14,7],[4,11,16,19,20,19,18,13,6],[5,12,17,20,21,20,17,12,5],[6,13,18,19,20,19,16,11,4],[7,14,15,16,17,18,15,10,3],[8,9,10,11,12,13,14,9,2],[1,2,3,4,5,6,7,8,1]]
// 입출력 예(파이썬)
// n	clockwise	result
// 5	True	[[1,2,3,4,1],[4,5,6,5,2],[3,6,7,6,3],[2,5,6,5,4],[1,4,3,2,1]]
// 6	False	[[1,5,4,3,2,1],[2,6,8,7,6,5],[3,7,9,9,8,4],[4,8,9,9,7,3],[5,6,7,8,6,2],[1,2,3,4,5,1]]
// 9	False	[[1,8,7,6,5,4,3,2,1],[2,9,14,13,12,11,10,9,8],[3,10,15,18,17,16,15,14,7],[4,11,16,19,20,19,18,13,6],[5,12,17,20,21,20,17,12,5],[6,13,18,19,20,19,16,11,4],[7,14,15,16,17,18,15,10,3],[8,9,10,11,12,13,14,9,2],[1,2,3,4,5,6,7,8,1]]
// 입출력 예 설명
// 입출력 예 #1

// clockwise가 참이므로, 소용돌이를 시계방향으로 돌려야 합니다.
// 다음 그림은 5x5 정사각형을 시계방향 소용돌이 모양으로 채운 모습입니다.
// ex1.png
// 입출력 예 #2

// clockwise가 거짓이므로, 소용돌이를 반시계방향으로 돌려야 합니다.
// 다음 그림은 6x6 정사각형을 반시계방향 소용돌이 모양으로 채운 모습입니다.
// ex2.png
// 입출력 예 #3

// clockwise가 거짓이므로, 소용돌이를 반시계방향으로 돌려야 합니다.
// 다음 그림은 9x9 정사각형을 반시계방향 소용돌이 모양으로 채운 모습입니다.

function solution(n, clockwise) {
  var answer = [[]];
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let start_points = [
    [0, 0],
    [n - 1, 0],
    [n - 1, n - 1],
    [0, n - 1],
  ];

  for (let i = 0; i < 4; i++) {
    let [x, y] = start_points[i];
    console.log(x, y);
    if (clockwise === true) {
    } else {
    }
  }

  return answer;
}
console.log(solution(5, true)); //[[1,2,3,4,1],[4,5,6,5,2],[3,6,7,6,3],[2,5,6,5,4],[1,4,3,2,1]]
