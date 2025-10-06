function solution(left, right) {
    let answer = 0;
    let numberYak = []
    
    for(let i = left; i<right+1; i++){
        numberYak.push(i)
    }
    
    for(let i =0; i<numberYak.length; i++){
        let yakTotal = 0;
        for(let j=1; j<=numberYak[i]; j++){
            if (numberYak[i] % j == 0){
                yakTotal++
            }
        }
        yakTotal % 2 == 0 ? answer+=numberYak[i] : answer-=numberYak[i];
    }
    return answer;
}