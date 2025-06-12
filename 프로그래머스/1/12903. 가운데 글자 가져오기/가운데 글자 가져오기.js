function solution(s) {
    let answer = '';
    let count = s.length;
    console.log(count);
    if(count % 2 === 0){
        answer = s[(count/2) - 1];
        answer += s[count/2];
    } else if (count % 2 !== 0){
        answer = s[(count/2) - 0.5];
    } else {
        answer = s;
    }
    return answer;
}