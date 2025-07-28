function solution(money) {
    
    let iceAmer = 5500;
    let answer = [parseInt(money / iceAmer), money % iceAmer];
    return answer;
}