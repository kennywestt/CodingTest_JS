function solution(my_string, letter) {
    let answer = '';
    for (let tt of my_string){
        if(tt !== letter){
            answer+=tt
        }
    }
    return answer;
}