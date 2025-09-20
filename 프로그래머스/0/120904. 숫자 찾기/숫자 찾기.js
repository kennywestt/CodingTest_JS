function solution(num, k) {
    let answer = 0;
    let str = num.toString()
    for(let i = 0; i<str.length; i++){
        if(parseInt((str[i])) == k) {
            answer += i+1
            break;
        } else if(!str.includes(k)) return -1;
    }
    return answer;
}