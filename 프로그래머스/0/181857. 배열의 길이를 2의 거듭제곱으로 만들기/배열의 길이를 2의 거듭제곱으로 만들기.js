function solution(arr) {
    let tLength = 1;
    const length = arr.length;
    while (tLength < length) {
        tLength *= 2;
    }
    const add = tLength - length;
    for (let i = 0; i < add; i++) {
        arr.push(0);
    }
    
    return arr;
}