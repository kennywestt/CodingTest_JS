function solution(s) {
    let answer = [];
    const same = [];
    const tt = s.split("");

    for(let i = 0; i < tt.length - 1; i++){
        for(let j = i + 1; j < tt.length; j++){
            if(tt[i] == tt[j]){
                same.push(tt[i]);
            }
        }
    }
    const sameNew = [...new Set(same)];
    
    for(let i = 0; i < tt.length; i++) {
        if (!sameNew.includes(tt[i])) {
            answer.push(tt[i]);
        }
    }
    return answer.sort().join("");
}