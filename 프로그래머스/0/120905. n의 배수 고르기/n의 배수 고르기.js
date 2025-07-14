function solution(n, numlist) {
    let answer = numlist.filter((index) => index % n === 0);
    return answer;
}