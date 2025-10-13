function solution(myString) {
    let answer = [];
    answer = myString.split('x').map(e => e.length)
    return answer;
}