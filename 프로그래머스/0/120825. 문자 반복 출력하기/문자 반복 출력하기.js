function solution(my_string, n) {
    var answer = '';
    
    for(var i=0; i<my_string.length; i++){
        answer += my_string[i];
        for(var j=1; j<n; j++){
            answer += my_string[i];
        }
    }
    return answer;
}