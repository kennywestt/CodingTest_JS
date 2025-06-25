function solution(n) {
    let answer = '';
    let odd = '수';
    let even = '박';
    
    for (let i = 0; i<=n-1; i++){
        if(i % 2 === 0){
            console.log('if',i);
            answer += odd;
        } else if (i % 2 !== 0){
            console.log('else if',i);
            answer += even;
        }
    }
    
    return answer;
}