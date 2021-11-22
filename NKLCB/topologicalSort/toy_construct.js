// 장난감 조립
// 우리는 어떤 장남감을 여러 가지 부품으로 조립하여 만들려고 한다.
// 이 장난감을 만드는데는 기본 부품과 그 기본 부품들을 조립하여 만든 중간 부품이 사용된다.
// 기본 부품은 다른 부품을 사용하여 조립될 수 없는 부품이다.중간 부품은 또 다른 중간 부품이나 기본 부품을 이용하여 만들어지는 부품이다.
// 예를 들어 보자.기본 부품으로서 1, 2, 3, 4가 있다.중간 부품 5는 2개의 기본 부품 1과 2개의 기본 부품 2로 만들어 진다.
// 그리고 중간 부품 6은 2개의 중간 부품 5, 3개의 기본 부품 3과 4개의 기본 부품 4로 만들어진다.
// 마지막으로 장남감 완제품 7은 2개의 중간 부품 5, 3개의 중간 부품 6과 5개의 기본 부품 4로 만들어진다.
// 이런 경우에 장남감 완제품 7을 만드는데 필요한 기본 부품의 개수는 1번 16개, 2번 16개, 3번 9개, 4번 17개이다.
// 이와 같이 어떤 장남감 완제품과 그에 필요한 부품들 사이의 관계가 주어져 있을 때 하나의 장난감 완제품을 조립하기 위하여 
// 필요한 기본 부품의 종류별 개수를 계산하는 프로그램을 작성하시오.
// ▣ 입력설명
// 입력 파일의 첫째 줄에는 정수 N(3≤N≤100)이 주어지는데, 1부터 N - 1까지는 기본 부품이나 중간 부품의 번호를 나타내고 N은 완제품의 번호를 나타낸다.
// 그리고 그 다음 줄에는 정수 M(3≤M≤100)이 주어지고 그 다음 M개의 줄에는 어떤 부품을 완성하는데 필요한 부품들간의 관계가 3개의 정수 X, Y, K로 주어진다.
// 이 뜻은 중간 부품이나 완제품 X를 만드는데 필요한 중간 부품 혹은 기본 부품 Y가 K개 필요하다는 뜻이다.
// ▣ 출력설명
// 하나의 완제품을 조립하는데 필요한 기본 부품의 수를 한 줄에 하나씩 출력하되(중간 부품은 출력하지 않음),
// 반드시 기본 부품의 번호가 작은 것부터 큰 순서가 되도록 한다. 각 줄에는 기본 부품의 번호와 소요 개수를 출력한다.
// ▣ 입력예제 1
// 7
// 8
// 5 1 2
// 5 2 2
// 7 5 2
// 6 5 2
// 6 3 3
// 6 4 4
// 7 6 3
// 7 4 5
// ▣ 출력예제 1
// 1 16
// 2 16
// 3 9
// 4 17

//dp[i][j] = j부품을 만드는 데 필요한 i부품의 개수.
//들어오는 간선이 없는 애들이 시작점. 

function solution(n, m, arr) {
    let answer = [];
    let graph = Array.from(Array(n + 1), () => Array());
    let indegrees = Array(n + 1).fill(0);
    let table = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    for (let [from, to, cnt] of arr) {
        graph[to].push([from, cnt]);
        indegrees[from] += 1;
    }

    let queue = [];
    for (let i = 1; i < n + 1; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
            table[i][i] = 1;
        }
    }

    while (queue.length) {
        let curr = queue.shift();
        for (let [next, val] of graph[curr]) {
            console.log(next, val);
            for (let j = 0; j < n + 1; j++) {
                table[j][next] += table[j][curr] * val;
            }
            indegrees[next] -= 1;
            if (indegrees[next] === 0) queue.push(next);
        }
    }
    for (let k = 0; k < n + 1; k++) {
        if (table[k][n] > 0) answer.push([k, table[k][n]])
    }
    return answer;
}

console.log(solution(7, 8, [[5, 1, 2], [5, 2, 2], [7, 5, 2], [6, 5, 2], [6, 3, 3], [6, 4, 4], [7, 6, 3], [7, 4, 5]]));