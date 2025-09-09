function solution(arr, k) {
    let answer = [];
    const mappedArr = arr.map(item => (k % 2 === 0 ? item + k : item * k));
    answer = mappedArr;
    return answer;
}