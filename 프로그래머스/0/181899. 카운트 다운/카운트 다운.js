function solution(start_num, end_num) {
    var answer = [];
    
    for(var i=start_num; i>=end_num; i--){
        answer.push(i);
    }
    return answer;
}