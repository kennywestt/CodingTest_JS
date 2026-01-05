function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i =0; i<intStrs.length; i++){
        const kk = intStrs[i].split('')
        const pp = parseInt(kk.splice(s,l).join(''));
        console.log(typeof pp)
        if(pp>k){
            answer.push(pp)
        }
    }
    return answer;
}