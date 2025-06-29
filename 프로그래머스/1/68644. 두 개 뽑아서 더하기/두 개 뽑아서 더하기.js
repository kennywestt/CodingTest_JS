function solution(numbers) {
    let addArray = [];
    let result = [];
    console.log(numbers);
    
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){  
            if(i!==j){ // 자기를 숫자를 더하는 것은 빼버리기
            addArray.push(numbers[i]+numbers[j]);
            }
        }
    }
    //중복된 수 빼고나서 오름차순으로 정렬
    result = [...new Set(addArray)].sort((a,b)=> a-b); 
    console.log(result);
    
    return result;
}