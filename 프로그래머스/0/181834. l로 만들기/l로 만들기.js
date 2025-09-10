function solution(myString) {
    let answer = '';
    for (let tt of myString){
        tt.charCodeAt() < 'l'.charCodeAt() ? answer += 'l' : answer += tt
    }
    return answer;
}