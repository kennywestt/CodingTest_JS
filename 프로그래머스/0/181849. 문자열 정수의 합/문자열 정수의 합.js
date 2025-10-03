function solution(num_str) {
    let answer = 0;
    num_str.split('').forEach(e=>answer+=parseInt(e));
    return answer;
}