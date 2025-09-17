function solution(myString, pat) {
    let answer = 0;
    let reverseStr ='';
    
    for(let tt of myString){
        if(tt == 'A'){
            reverseStr += 'B'
        } else if(tt =='B'){
            reverseStr += 'A'
        }
    }
    reverseStr.includes(pat) ? answer = 1 : answer = 0
    return answer
}