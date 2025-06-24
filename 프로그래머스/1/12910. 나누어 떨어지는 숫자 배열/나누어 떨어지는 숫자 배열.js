function solution(arr, divisor) {
    let answer = [];
    
    arr.sort((a,b) => a-b);
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % Math.floor(divisor) === 0){
            console.log(arr[i]);
            answer.push(arr[i]);
        } 
    }
    
    if(answer.length == 0){
        answer.push(-1);
    }
    return answer;
}