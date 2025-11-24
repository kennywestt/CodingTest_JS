function solution(arr, intervals) {
    let answer = [];
    for(let i=0; i<intervals.length; i++){
        let startNum = 0;
        let lastNum = 0;
        startNum = intervals[i][0];
        lastNum = intervals[i][1];
        for(let j=startNum; j<=lastNum; j++){
            answer.push(arr[j])
        }
    }
    return answer;
}