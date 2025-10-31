function solution(number) {
    let answer = 0;
    number.split('').forEach((e,i)=> {
        answer += parseInt(e)
    })
    answer %= 9
    return answer;
}