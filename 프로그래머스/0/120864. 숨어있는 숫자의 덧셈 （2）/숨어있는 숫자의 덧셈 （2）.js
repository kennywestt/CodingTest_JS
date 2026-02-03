function solution(my_string) {
    let answer = 0;
    const tt = my_string.split(/[a-zA-Z]+/)
    for(let i of tt){
        let parseNum = parseInt(i)
        if(Number.isInteger(parseNum)){
            answer+=parseNum
        }
    }
    return answer;
}