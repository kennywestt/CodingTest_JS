function solution(A,B){
    let answer = 0;
    let kk = [];
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)

    for(let i =0; i<A.length; i++){
        kk.push(parseInt(A[i] * B[i]))
    }
    kk.forEach(item => {
        answer += item}
    )
    return answer
}