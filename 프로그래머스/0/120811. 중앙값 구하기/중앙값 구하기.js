function solution(array) {
    let answer = 0;
    
    array.sort((a,b)=> b-a);
    answer = array[parseInt(Math.floor(array.length/2))];
    
    return answer;
}