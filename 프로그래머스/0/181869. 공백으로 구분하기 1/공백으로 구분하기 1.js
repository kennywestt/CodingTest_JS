function solution(my_string) {
    let answer = [];
    let pp = my_string.trim().split(' ').filter((e) => {if (e != ''){answer.push(e)}})
    return answer;
}