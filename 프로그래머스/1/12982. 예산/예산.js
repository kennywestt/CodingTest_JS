function solution(d, budget) {
    let totalCount = 0;
    let count = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        if (totalCount + d[i] <= budget) {
            totalCount += d[i];
            count++;
        } else {
            break;
        }
    }

    return count;
}