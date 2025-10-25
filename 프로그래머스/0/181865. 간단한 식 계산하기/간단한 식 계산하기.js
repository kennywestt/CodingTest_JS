function solution(binomial) {
    let answer = 0;
    let kk = binomial.split(' ');
    if(kk[1] =='+'){
        answer = parseInt(kk[0]) + parseInt(kk[2]);
    } else if(kk[1] == '-'){
        answer = parseInt(kk[0]) - parseInt(kk[2]);
    } else if(kk[1] == '*') {
        answer = parseInt(kk[0]) * parseInt(kk[2]);
    }
    return answer;
}