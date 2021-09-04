// https://programmers.co.kr/learn/courses/30/lessons/42891 [무지의 먹방]

function solution(food_times, k) {
    let foodNum = food_times.length;
    var answer = 0;
    let times_dict = {};
    let times = [];
    let priority = [];
    for(let i = 0; i < foodNum; i++) {
        times_dict[i] = food_times[i];
    }
    
    let prio_times = [];
    for(let time in times_dict) {
        prio_times.push([time, times_dict[time]]);
    }

    prio_times.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    for(let i = 0; i < foodNum; i++) {
        times[i] = prio_times[i][1];
        priority[i] = Number(prio_times[i][0]);
    }
    
    let sumOfTime = 0
    let differ = 0;
    while(times) {
        times[0] = times[0] - differ //update munimun val
        sumOfTime = times[0] * foodNum; //subtract minimum time from all time val
        if(k < sumOfTime) { //shutdowned before eat all food
            priority.sort(); //sort priority
            return priority[k % foodNum]+1; //return index+1
        }
        k = k - sumOfTime //update k
        differ += times[0]; //update difference
        times.shift(); //pop
        priority.shift(); //pop
        if(times.length == 0) return -1; //ate all food before shut down.
        foodNum -= 1;
    }
    return -1; //ate all food after shut down
}
