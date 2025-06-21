function solution(arr) {
    let answer = [];

    if (arr.length === 1) {
        return [-1];
    }
    
    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);
    
    arr.splice(minIndex, 1);
    
    return arr;
}