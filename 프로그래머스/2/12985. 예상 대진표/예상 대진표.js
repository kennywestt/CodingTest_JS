function solution(n, a, b) {
    let answer = 0;

    while (a !== b) {
        answer++;
        a = Math.floor((a - 1) / 2) + 1;
        b = Math.floor((b - 1) / 2) + 1;
    }

    return answer;
}