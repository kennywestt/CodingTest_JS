function solution(num_list, n) {
    let answer = [];
    [...num_list].map((v,i)=>{if(i%n==0) answer.push(v)})
    return answer;
}