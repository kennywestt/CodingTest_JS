function solution(my_string) {
    let answer = [];
    let splitArray = [my_string];
    
    splitArray = my_string.split('');
    for(let i = 0; i<splitArray.length; i++){
        if (splitArray[i] % 1 ==0) {
            answer.push(parseInt(splitArray[i]));
        }
    }
    answer.sort((a,b)=>a-b)
    return answer;
}