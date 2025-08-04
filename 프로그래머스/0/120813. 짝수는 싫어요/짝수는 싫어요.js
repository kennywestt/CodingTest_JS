function solution(n) {
    let answer = [];
    
    if (n % 2 == 0){
        for(let i=1; i<= n; i+=2){
            answer.push(i);
        }        
    } else{
        for(let j=1; j<= n; j+=2){
            answer.push(j);
        }
    }
    return answer;
}