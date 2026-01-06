function solution(my_string, s, e) {
    var answer = [];
    let tt = my_string.split('');
    const bef = tt.slice(0,s).join('')
    answer+= bef
    const spl = tt.slice(s,e+1).reverse().join('')
    answer+= spl
    for(let i=e+1; i<tt.length; i++){
        answer+=tt[i]
    }
    return answer;
}