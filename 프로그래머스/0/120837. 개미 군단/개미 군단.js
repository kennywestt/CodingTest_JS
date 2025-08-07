function solution(hp) {
    let answer = 0;
    const bigCount = hp/5; // 장군개미 구하는 계산식
    
    if(hp >= 5){
        answer = Math.floor(bigCount); // +장군개미 개수
        if (bigCount >= 3) {
            answer +=  Math.floor((hp % 5) / 3); // +병정개미 개수
            answer += ((hp % 5) % 3) // +일개미 개수
        } 
    } else if(hp >= 3){
        answer = Math.floor(hp / 3) // +병정개미 개수
        answer += hp % 3 // 일개미 개수
    } else {
        return hp;
    }
    return answer;
}
