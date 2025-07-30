function solution(s) {
    let answer = '';
    let arr = [];

    for(let i = 0; i<s.length; i++){
        arr.push(s[i]);
    }
    
    arr.sort((a, b) => {
        if (a < b) {
            return 1; // a를 b 뒤로 보냄 (내림차순)
        }
        if (a > b) {
            return -1; // a를 b 앞으로 보냄 (내림차순)
        }
            return 0; // a와 b가 같으면 순서 변경 안 함
    });
    console.log(arr);
    answer = arr.join("");
    console.log(answer);
    
    return answer;
}