function solution(arr) {
    let answer = '';
    arr.sort((a,b)=>a-b).forEach(v => answer += v);
    return answer;
}