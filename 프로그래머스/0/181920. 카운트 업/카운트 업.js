function solution(start_num, end_num) {
    var answer = [];
    
    for(let i = start_num+1 ; i<end_num; i++){
        answer.push(i);
    }
    answer.push(start_num, end_num);
    answer.sort((a,b)=>a-b);
    
    return answer;
}