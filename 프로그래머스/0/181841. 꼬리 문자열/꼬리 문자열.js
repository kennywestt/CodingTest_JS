function solution(str_list, ex) {
    let answer = '';
    
    for(let tt of str_list){
        tt.includes(ex) ? answer+='' : answer+=tt
    }
    return answer;
}