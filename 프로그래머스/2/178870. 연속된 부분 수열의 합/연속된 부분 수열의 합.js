function solution(sequence, k) {
    let answer = [0, sequence.length - 1];
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let minLength = Infinity;

    while (right < sequence.length) {
        if (sum < k) {
            right++;
            if (right < sequence.length) sum += sequence[right];
        } else if (sum > k) {
            sum -= sequence[left];
            left++;
        } else {
            let currentLength = right - left;
            if (currentLength < minLength) {
                minLength = currentLength;
                answer = [left, right];
            }
            sum -= sequence[left];
            left++;
        }
    }

    return answer;
}