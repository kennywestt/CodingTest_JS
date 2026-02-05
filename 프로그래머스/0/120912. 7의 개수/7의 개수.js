function solution(array) {
    let answer = 0;
    for(let i=0; i<array.length; i++){
        let split = array[i].toString().split('')
        for(let j=0; j<split.length; j++){
         if(split[j] === '7') answer++   
        }
    }
    return answer;
}