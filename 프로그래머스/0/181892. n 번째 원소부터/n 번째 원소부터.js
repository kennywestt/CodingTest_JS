function solution(num_list, n) {
    let answer = [];
    num_list.filter((element,index)=> {
        if(index >= n-1){
            answer.push(element)
        }
    })
    return answer;
}