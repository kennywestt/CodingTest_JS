function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let lastInterceptPos = -1;

    for (let i = 0; i < targets.length; i++) {
        const [s, e] = targets[i];
        if (s >= lastInterceptPos) {
            answer++;
            lastInterceptPos = e;
        }
    }
    return answer;
}