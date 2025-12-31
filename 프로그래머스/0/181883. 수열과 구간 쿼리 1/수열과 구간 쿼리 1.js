function solution(arr, queries) {
    const arr2 = [...arr];
    for (let i = 0; i < queries.length; i++) {
        let zeroInd = queries[i][0];
        let oneInd = queries[i][1];

        for (let j = 0; j < arr2.length; j++) {
            if (zeroInd <= j && j <= oneInd) {
                arr2[j]++;
            }
        }
    }
    return arr2;
}
