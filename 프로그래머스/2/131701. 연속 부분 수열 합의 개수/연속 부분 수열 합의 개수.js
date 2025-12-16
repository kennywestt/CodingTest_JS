function solution(elements) {
    const N = elements.length;
    const circularElements = elements.concat(elements);
    const sums = new Set();
    
    for (let L = 1; L <= N; L++) {
        for (let i = 0; i < N; i++) {
            let currentSum = 0;
            for (let j = 0; j < L; j++) {
                currentSum += circularElements[i + j];
            }
            sums.add(currentSum);
        }
    }
    return sums.size;
}