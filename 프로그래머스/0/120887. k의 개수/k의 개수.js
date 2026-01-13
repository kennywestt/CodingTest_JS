function solution(i, j, k) {
    let answer = 0;
    for(let s = i; s<=j; s++){
        let tt = s.toString().split('');
        const pp = k.toString()
        for(let k = 0; k <tt.length; k++){
            if(tt[k]==pp)answer++
        }
    }
    return answer;
}