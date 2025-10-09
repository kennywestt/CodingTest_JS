function solution(arr, n) {
    let answer = [];
    arr.filter((element,index)=> {
        if(arr.length % 2 == 0){
            index % 2 !== 0 ? answer.push(element+n)  : answer.push(element);
        } else{
            index % 2 == 0 ? answer.push(element+n) : answer.push(element);
        }
    })
    return answer;
}