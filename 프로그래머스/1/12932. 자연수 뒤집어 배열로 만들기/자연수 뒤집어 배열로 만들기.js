function solution(n) {
    let answer = [];
    let str = n.toString();
    console.log(str.length);
    
    for(let i =0; i<str.length; i++){
        answer.push(parseInt(str[i]));
    }
    
    answer.reverse();
    
    return answer;
}