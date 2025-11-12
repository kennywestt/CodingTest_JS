function solution(order) {
    let answer = 0;
    let pp = order.toString()
    .split('')
    .filter(e => e =='3' || e=='6' || e=='9' ? answer++ : answer)
    return answer;
}