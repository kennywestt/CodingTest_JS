function solution(my_string) {
    let answer = '';
    [...my_string].map(a=> {
        if (a === a.toUpperCase()) {
            answer += a.toLowerCase();
        } else {
            answer += a.toUpperCase();
        }
    });
    return answer;
}