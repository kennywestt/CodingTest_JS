function solution(a, b) {
    let answer = 0;
    let minNum = Math.min(a,b);
    let maxNum = Math.max(a,b);
    
    for (let i=minNum; i<=maxNum; i++){
        if (minNum===maxNum){
            answer = i;
        } else {
            answer += i;
        }
    }
    return answer;
}