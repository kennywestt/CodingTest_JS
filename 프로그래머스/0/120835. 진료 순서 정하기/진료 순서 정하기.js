function solution(emergency) {
    let answer = [];
    const pp = [...emergency].sort((a,b)=>b-a)
    answer = emergency.map(v=>pp.indexOf(v)+1)
    return answer;
}

