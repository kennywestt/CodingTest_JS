function solution(numbers) {
    let answer = 0;
    let timesArr = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j= i+1; j<numbers.length; j++){
            timesArr.push(numbers[i] * numbers[j]);
        }
    }
    timesArr.sort((a,b)=>b-a);
    answer = timesArr[0];
    return answer;
}