function solution(sides) {
    let answer = 0;    
    // ascArray변수는 배열을 오름차순으로 만듬
    let ascArray = sides.sort((a,b) => a-b);
    console.log(ascArray);
    
    if(ascArray[0]+ascArray[1] > ascArray[2]) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}