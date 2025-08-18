function solution(n, control) {
    let answer = n;
    
    control.split('').forEach(element=> {
        if(element === 'w'){
            answer +=1;
        } else if(element === 's'){
            answer -=1;
        } else if(element === 'd'){
            answer +=10;
        } else if(element === 'a'){
            answer -=10;
        }
    })
    return answer;
}