function solution(myString) {
    let answer = '';
    console.log(myString);
    let lowerStr = myString.toLowerCase();
    console.log(lowerStr);
    lowerStr.split('').map(v => {
        if (v=='a'){
            answer += v.toUpperCase()}
        else{
            answer += v;
        }
    })
    return answer;
}