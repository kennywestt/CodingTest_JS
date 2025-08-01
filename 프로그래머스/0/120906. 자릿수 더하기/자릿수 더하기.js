function solution(n) {
    let answer = 0;
    let nstr = n.toString(); 
    let array = nstr.split('')
    
    array.filter(items => answer += parseInt(items));
    
    return answer;
}