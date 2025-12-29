function solution(a, d, included) {
    let answer = 0;
    let firstNum = a;
    let numArr = [a]
    console.log(a, d, included)
    for(let i = 1; i<included.length; i++){
        numArr.push(firstNum+d);
        firstNum+=d;
    }
    numArr.filter((v,i)=> {
        if (included[i]==1) {
            answer += v
        }
    })
    return answer;
}