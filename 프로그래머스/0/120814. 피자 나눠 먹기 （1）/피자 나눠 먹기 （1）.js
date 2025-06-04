function solution(n) {
    let answer = 0;
    let pizzaSpecies = 7;
    
    if(n%pizzaSpecies>0){
        answer = parseInt(n/pizzaSpecies)+1;
    } else {
        answer = n/7;
    }
    return answer;
}