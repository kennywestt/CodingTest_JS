function solution(numbers) {
    let result = 0;
    let range = [0,1,2,3,4,5,6,7,8,9];
    numbers.sort();
    
    let numberSet = new Set(numbers);
    
    console.log(numberSet);
    
    for(let i = 0; i<range.length; i++){
        if(!numberSet.has(range[i])){
            result += range[i];
        }
    }
    
    return result;
}