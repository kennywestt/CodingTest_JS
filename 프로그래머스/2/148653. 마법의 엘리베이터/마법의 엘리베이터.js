function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        let digit = storey % 10;
        let next = Math.floor(storey / 10) % 10;

        if (digit > 5) {
            answer += (10 - digit);
            storey += 10;
        } else if (digit < 5) {
            answer += digit;
        } else {
            if (next >= 5) {
                answer += 5;
                storey += 10; 
            } else {
                answer += 5;
            }
        }

        storey = Math.floor(storey / 10);
    }

    return answer;
}
