function solution(numbers) {
    let answer = 0;
    
    numbers.sort((a,b) => a-b).reverse();
    answer = numbers[0] * numbers[1];
    
    return answer;
}