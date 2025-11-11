function solution(a, b) {
    let answer = 0;
    let aHigh = parseInt(a.toString()+b.toString())
    let bHigh = parseInt(b.toString() + a.toString())
    aHigh > bHigh ? answer += aHigh : answer += bHigh
    return answer;
}