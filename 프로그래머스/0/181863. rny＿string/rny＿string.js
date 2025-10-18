function solution(rny_string) {
    let answer = '';
    console.log(rny_string)
    answer = rny_string.replace(/m/g, 'rn')
    return answer;
}