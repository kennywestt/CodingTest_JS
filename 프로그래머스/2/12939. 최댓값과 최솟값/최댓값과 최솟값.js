function solution(s) {
    let answer = '';
    let kk = s.split(/\s+/g).sort((a,b)=>a-b);
    const maxNum = Math.max(...kk);
    const minNum = Math.min(...kk);
    
    answer = [minNum, maxNum].join(' ');
    return answer;
}