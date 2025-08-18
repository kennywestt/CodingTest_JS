function solution(cipher, code) {
    let answer = '';
    const pp = cipher.split('').filter((element, index) => {
        if((index + 1) % code === 0){
            answer += element;
        }
    });
    
    return answer;
}