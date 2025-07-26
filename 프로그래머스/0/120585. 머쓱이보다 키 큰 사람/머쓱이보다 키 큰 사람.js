function solution(array, height) {
    let answer = 0;
    
    array.filter((item)=> {
        if(item > height) {
            answer++
        }
    })
    return answer;
}