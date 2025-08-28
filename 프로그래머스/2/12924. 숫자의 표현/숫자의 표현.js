function solution(n) {
    let answer = 0;
    while (n % 2 === 0) {
        n /= 2;
    }

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            answer++;
            if (i * i !== n) {
                answer++;
            }
        }
    }

    return answer;
}