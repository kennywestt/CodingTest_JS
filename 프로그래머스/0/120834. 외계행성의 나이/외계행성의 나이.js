function solution(age) {
    let answer = age.toString()
    .split('')
    .map(e =>String.fromCharCode(parseInt(e)+97))
    .join('');
    return answer;
}