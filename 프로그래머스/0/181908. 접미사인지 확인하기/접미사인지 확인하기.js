function solution(my_string, is_suffix) {
    let answer = 0;
    my_string.includes(is_suffix) ? answer += 1 : answer += 0
    if(answer == 1){
        if(my_string[my_string.length-1] !== is_suffix[is_suffix.length-1]){
            return 0
        }
    }
    
    return answer;
}