function solution(num_list) {
    let answer = 0;
    let sum = 0;
    let times = 1;
    
    for (var i=0; i<num_list.length;i++) {
        sum += num_list[i];
        times *= num_list[i];
    }
    
    if(times > sum**2){
        answer = 0;
    } else {
        answer = 1;
    }
    
    return answer;
}