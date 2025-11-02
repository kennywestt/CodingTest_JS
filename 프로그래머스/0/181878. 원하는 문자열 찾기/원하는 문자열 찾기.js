function solution(myString, pat) {
    let answer = 0;
    let lowMyString = myString.toLowerCase();
    let lowpat = pat.toLowerCase();

    lowMyString.includes(lowpat) ? answer = 1 : answer = 0;
    return answer;
}