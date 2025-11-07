function solution(n) {
    const answer = [];

    function hanoi(count, from, to, aux) {
        if (count === 1) {
            answer.push([from, to]);
            return;
        }

        hanoi(count - 1, from, aux, to);
        answer.push([from, to]);
        hanoi(count - 1, aux, to, from);
    }

    hanoi(n, 1, 3, 2);

    return answer;
}