// 거리 두기
// 현수는 영화관에 도착했습니다. 
// 영화상영 시간보다 약간 늦은 현수는 남은 좌석을 빨리 선택하고 영화를 보려고 합니다.
// 현수에게 일렬로된 좌석정보가 주어지면, 이미 앉아 있는 사람들 중 가장 가까운 사람과 최대한 멀리 떨어져 앉을 자석을 선택해야 합니다. 여러분이 도와주세요.
// ▣ 입력설명
// 매개변수 nums에 길이가 N(3<=N<=100)인 수열을 통해 좌석의 정보가 주어집니다. 
// 좌석정보는 1은 이미 사람이 앉은 좌석이고 0의 빈 좌석입니다.
// ▣ 출력설명
// 현수가 이미 앉은 사람과 최대한 멀리 앉을 수 있는 거리를 반환합니다.
// ▣ 입력예제 1
// [1, 0, 0, 0, 1, 0, 0, 1, 0, 1]
// ▣ 출력예제 1
// 2
// 출력설명
// 총 10개의 좌석이 왼쪽부터 0번 좌석으로 해서 9번 좌석까지 존재한다면 현수가 2번 좌석에 앉으면 가장 가까운 사람과의 거리가 2가 됩니다. 
//만약 6번 좌석에 앉으면 가장 가까운 사람과의 거리는 1입니다.

// --------------------******************************-------------------------------------
// 앞에서부터 순회하며 앉아 있는 사람간의 거리를 mark해 둔다.
// 뒤에서부터 순회하며 현재 mark되어있는 거리와 뒤에서부터 계산된 거리 중 더 짧은 값을 mark한다.
// 전체 list에서 가장 큰 값을 반환한다.
//맨 앞과 맨 뒤의 값이 0인 경우를 대비하여, 초기 dist는 1000이라는 큰 값으로 설정해둔다.

function solution(chairs) {
    let dist = 1000;
    let distance = []; 

    for(let i = 0; i < chairs.length; i++) {
        if(chairs[i] == 1) {
            dist = 0;
            distance[i] = dist;
        }
        else {
            dist += 1;
            distance[i] = dist;
        }
    }
    dist = 1000;
    for(let j = chairs.length-1; j >= 0; j--) {
        if(chairs[j] == 1) dist = 0;
        else {
            dist += 1;
            distance[j] = Math.min(distance[j], dist);
        }
    }
    return Math.max(...distance);
}

console.log(solution([0, 0, 1, 0, 1, 0, 0, 1, 0, 1]));